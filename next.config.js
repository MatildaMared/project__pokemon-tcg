/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    TCG_API_KEY: process.env.TCG_API_KEY,
  },
  images: {
    domains: ["images.pokemontcg.io"],
  },
};

module.exports = nextConfig;
