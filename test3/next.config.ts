import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  ${{ENV_SECRET}}
}

export default nextConfig
