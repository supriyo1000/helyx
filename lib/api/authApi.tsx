import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { RootState } from "../store"
import { setCredentials, logout, updateUser } from "../features/auth/authSlice"
import { updateSessionActivity, isSessionValid, hasSessionData } from "../utils/authStorage"
import type { User } from "../features/auth/authSlice"
import type {
    LoginRequest,
    SignupRequest,
    AuthResponse,
    UpdateProfileRequest,
    ChangePasswordRequest,
    ResetPasswordRequest,
} from "../types/auth"
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query"

// interface ApiError {
//     status: number
//     data: {
//         message: string
//     }
// }

// Base query with auth and session management
const baseQuery = fetchBaseQuery({
    baseUrl: "/api/auth",
    prepareHeaders: (headers, { getState }) => {
        // Only check session if we have session data
        if (hasSessionData() && !isSessionValid()) {
            console.log("🔒 Session invalid - not adding auth header")
            return headers
        }

        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
            // Update session activity on API calls only if session exists
            if (hasSessionData()) {
                updateSessionActivity()
            }
        }
        return headers
    },
})

// Base query with re-auth and session management
// const baseQueryWithReauth = async (args: unknown, api: unknown, extraOptions: unknown) => {
//     // Only check session validity if we have session data and it's not a refresh request
//     if (hasSessionData() && !isSessionValid() && (args as { url: string }).url !== "/refresh") {
//         console.log("🔒 Session invalid - logging out")
//             ; (api as { dispatch: (action: unknown) => void }).dispatch(logout())
//         return {
//             error: {
//                 status: 401,
//                 data: { message: "Session expired" },
//             },
//         }
//     }

//     let result = await baseQuery(args, api, extraOptions)

//     if (result.error && (result.error as ApiError).status === 401) {
//         // Try to get a new token
//         const refreshToken = ((api as { getState: () => RootState }).getState() as RootState).auth.refreshToken
//         if (refreshToken && (!hasSessionData() || isSessionValid())) {
//             const refreshResult = await baseQuery(
//                 {
//                     url: "/refresh",
//                     method: "POST",
//                     body: { refreshToken },
//                 },
//                 api,
//                 extraOptions,
//             )

//             if (refreshResult.data) {
//                 const { user, token, refreshToken: newRefreshToken } = refreshResult.data as AuthResponse
//                     // Store the new token
//                     ; (api as { dispatch: (action: unknown) => void }).dispatch(
//                         setCredentials({ user, token, refreshToken: newRefreshToken }),
//                     )
//                 // Retry the original query
//                 result = await baseQuery(args, api, extraOptions)
//             } else {
//                 console.log("🔒 Refresh token failed - logging out")
//                     ; (api as { dispatch: (action: unknown) => void }).dispatch(logout())
//             }
//         } else {
//             console.log("🔒 No valid refresh token or session - logging out")
//                 ; (api as { dispatch: (action: unknown) => void }).dispatch(logout())
//         }
//     }

//     return result
// }


const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
    async (args, api, extraOptions) => {
        // Only check session validity if we have session data and it's not a refresh request
        if (hasSessionData() && !isSessionValid() && (typeof args === "object" && args.url !== "/refresh")) {
            console.log("🔒 Session invalid - logging out")
            api.dispatch(logout())
            return {
                error: {
                    status: 401,
                    data: { message: "Session expired" },
                },
            }
        }

        let result = await baseQuery(args, api, extraOptions)

        if (result.error && result.error.status === 401) {
            const refreshToken = (api.getState() as RootState).auth.refreshToken
            if (refreshToken && (!hasSessionData() || isSessionValid())) {
                const refreshResult = await baseQuery(
                    {
                        url: "/refresh",
                        method: "POST",
                        body: { refreshToken },
                    },
                    api,
                    extraOptions,
                )

                if (refreshResult.data) {
                    const { user, token, refreshToken: newRefreshToken } = refreshResult.data as AuthResponse
                    api.dispatch(setCredentials({ user, token, refreshToken: newRefreshToken }))
                    result = await baseQuery(args, api, extraOptions) // retry original request
                } else {
                    console.log("🔒 Refresh token failed - logging out")
                    api.dispatch(logout())
                }
            } else {
                console.log("🔒 No valid refresh token or session - logging out")
                api.dispatch(logout())
            }
        }

        return result
    }

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["User", "Profile"],
    endpoints: (builder) => ({
        // Authentication endpoints
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(setCredentials(data))
                } catch {
                    // Handle error
                }
            },
        }),

        signup: builder.mutation<AuthResponse, SignupRequest>({
            query: (userData) => ({
                url: "/signup",
                method: "POST",
                body: userData,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(setCredentials(data))
                } catch {
                    // Handle error
                }
            },
        }),

        logout: builder.mutation<{ message: string }, void>({
            query: () => ({
                url: "/logout",
                method: "POST",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    dispatch(logout())
                } catch {
                    // Even if the request fails, clear local state
                    dispatch(logout())
                }
            },
        }),

        refreshToken: builder.mutation<AuthResponse, { refreshToken: string }>({
            query: ({ refreshToken }) => ({
                url: "/refresh",
                method: "POST",
                body: { refreshToken },
            }),
        }),

        // Profile endpoints
        getProfile: builder.query<User, void>({
            query: () => "/profile",
            providesTags: ["Profile"],
        }),

        updateProfile: builder.mutation<User, UpdateProfileRequest>({
            query: (updates) => ({
                url: "/profile",
                method: "PATCH",
                body: updates,
            }),
            invalidatesTags: ["Profile"],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(updateUser(data))
                } catch {
                    // Handle error
                }
            },
        }),

        // Password management
        changePassword: builder.mutation<{ message: string }, ChangePasswordRequest>({
            query: (passwords) => ({
                url: "/change-password",
                method: "POST",
                body: passwords,
            }),
        }),

        resetPassword: builder.mutation<{ message: string }, ResetPasswordRequest>({
            query: ({ email }) => ({
                url: "/reset-password",
                method: "POST",
                body: { email },
            }),
        }),

        confirmResetPassword: builder.mutation<
            { message: string },
            { token: string; password: string; confirmPassword: string }
        >({
            query: ({ token, password, confirmPassword }) => ({
                url: "/reset-password/confirm",
                method: "POST",
                body: { token, password, confirmPassword },
            }),
        }),

        // Email verification
        sendVerificationEmail: builder.mutation<{ message: string }, void>({
            query: () => ({
                url: "/verify-email/send",
                method: "POST",
            }),
        }),

        verifyEmail: builder.mutation<{ message: string }, { token: string }>({
            query: ({ token }) => ({
                url: "/verify-email/confirm",
                method: "POST",
                body: { token },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    dispatch(updateUser({ emailVerified: true }))
                } catch {
                    // Handle error
                }
            },
        }),

        // Social authentication
        socialAuth: builder.mutation<AuthResponse, { provider: "google" | "github"; code: string; state?: string }>({
            query: ({ provider, code, state }) => ({
                url: `/social/${provider}`,
                method: "POST",
                body: { code, state },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    dispatch(setCredentials(data))
                } catch {
                    // Handle error
                }
            },
        }),
    }),
})

export const {
    useLoginMutation,
    useSignupMutation,
    useLogoutMutation,
    useRefreshTokenMutation,
    useGetProfileQuery,
    useUpdateProfileMutation,
    useChangePasswordMutation,
    useResetPasswordMutation,
    useConfirmResetPasswordMutation,
    useSendVerificationEmailMutation,
    useVerifyEmailMutation,
    useSocialAuthMutation,
} = authApi
