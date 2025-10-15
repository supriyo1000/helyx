// "use client";
// import { usePathname, useSearchParams } from "next/navigation";
// import { useEffect } from "react";
// import Script from "next/script";

// export default function GoogleAnalyticsTracker() {
//     const pathname = usePathname();
//     const searchParams = useSearchParams();

//     useEffect(() => {
//         const url = pathname + searchParams.toString() ? `?${searchParams.toString()}` : "";
//         if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
//             window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
//                 page_path: url,
//             });
//         }
//     }, [pathname, searchParams]);

//     return (
//         <>
//             <Script
//                 src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
//                 strategy="afterInteractive"
//             />
//             <Script id="google-analytics" strategy="afterInteractive">
//                 {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
//           `}
//             </Script>
//         </>
//     );
// }



"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleAnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
                page_path: url,
            });
        }
    }, [pathname, searchParams]);

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
            </Script>
        </>
    );
}