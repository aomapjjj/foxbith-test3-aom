import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  env: {
    API_KEY: "AIzaSyAT7RgGPocQls6oV1FifId2GlKvDLvTC7k",
    AUTH_DOMAIN: "auth-80749.firebaseapp.com",
    PROJECT_ID: "auth-80749",
    STORAGE_BUCKET: "auth-80749.firebasestorage.app",
    MESSAGINGSENDER_ID: "486568600273",
    APP_ID: "1:486568600273:web:45c734df817885c1abdbf0"
  }
}

export default nextConfig
