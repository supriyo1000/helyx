// Updated: D:\Helyx_website\helyx2\lib\utils\otpStorage.ts
// Changes:
// - Updated to use single manage_otp stored procedure with dbmode
// - dbmode values: 1=save, 2=get, 3=delete, 4=increment attempts, 5=clean expired, 6=get stats, 7=get all OTPs
// - Adjusted calls to pass dbmode and handle results appropriately

import { callStoredProcedure} from '../database/connection';

interface OTPData {
  otp: string;
  expire: number;
  attempts: number;
}

// Generate 6-digit OTP
export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// // Start automatic cleanup every 10 minutes
// export function startCleanupInterval(): void {
//   setInterval(async () => {
//     await cleanExpiredOTPs();
//     console.log(`[OTP Storage] Cleaned expired OTPs.`);
//   }, 10 * 60 * 1000); // 10 minutes
// }

export async function saveOTP(email: string, otp: string): Promise<void> {
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
  const signupKey = email.toLowerCase().trim();
  await callStoredProcedure('manage_otp', [1, signupKey, otp, expiresAt, 0]);
  console.log("saving otp....", email, otp);
}

export async function getOTP(email: string): Promise<OTPData | null> {
  const signupKey = email.toLowerCase().trim();
  // Explicitly type the expected database result
  const result = await callStoredProcedure<{ email: string; otp: string; expire: Date; attempts: number }[]>('manage_otp', [2, signupKey, '', null, 0]);

  // Handle nested result set (result is an array of arrays)
  const data = Array.isArray(result) && result.length > 0 && Array.isArray(result[0]) && result[0].length > 0 ? result[0][0] : null;

  if (!data) {
    console.log("something went wrong to verify otp");
    return null;
  }

  return {
    otp: data.otp,
    expire: new Date(data.expire).getTime(),
    attempts: data.attempts,
  };
}

export async function verifyOTP(email: string, otp: string): Promise<{ valid: boolean; error?: string }> {

  const signupKey = email.toLowerCase().trim();
  const otpData = await getOTP(email);

  console.log("otpData" , otpData);
  

  if (!otpData) {
    return { valid: false, error: "No OTP found for this email" };
  }

  if (Date.now() > otpData.expire) {
    await callStoredProcedure('manage_otp', [3, signupKey, '', null, 0]);
    return { valid: false, error: "OTP has expired" };
  }

  console.log("1");
  

  if (otpData.attempts >= 3) {
    await callStoredProcedure('manage_otp', [3, signupKey, '', null, 0]);
    return { valid: false, error: "Too many failed attempts" };
  }
  console.log("2");

  if (otpData.otp === otp) {
    // OTP is valid, remove it from storage
    await callStoredProcedure('manage_otp', [3, signupKey, '', null, 0]);
    console.log("3");
    return { valid: true };
  }
  else {
    // Increment attempts
    await callStoredProcedure('manage_otp', [4, signupKey, '', null, 0]);
    console.log("4");
    return { valid: false, error: "Invalid OTP" };
  }
}

// export async function cleanExpiredOTPs(): Promise<void> {
//   await callStoredProcedure('manage_otp', [5, '', '', null, 0]);
// }

// Legacy function names for compatibility
export const storeOTP = saveOTP;

// Start cleanup when module loads
// startCleanupInterval();