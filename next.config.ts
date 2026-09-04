import type { NextConfig } from "next";
const isCloudflare = process.env.CLOUDFLARE_PAGES === "cloudflare";
const nextConfig: NextConfig = {
  ...(isCloudflare && {
output: "export",
  images:{
    unoptimized: true,
  },
  }),
  trailingSlash:true,
  skipTrailingSlashRedirect:true,
};

export default nextConfig;
