/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-0198217282574dada06155209c57c678.r2.dev",
        port: "",
        pathname: "**",
      },
    ],
  },
  javascript: {
    ignoreBuildErrors: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
