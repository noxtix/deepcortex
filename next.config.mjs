/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 't3.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
    ],
  },
};

export default nextConfig;
