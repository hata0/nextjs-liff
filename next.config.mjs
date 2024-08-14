/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "profile.line-scdn.net",
      },
    ],
  },
  typescript: {
    tsconfigPath: process.env.NODE_ENV === "test" ? "tsconfig.test.json" : "tsconfig.json",
  },
  pageExtensions: ["page.tsx", "api.ts"],
};

export default nextConfig;
