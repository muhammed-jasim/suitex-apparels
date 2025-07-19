/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: false, // optional but helpful for static hosting
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
