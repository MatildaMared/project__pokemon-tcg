/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TCG_API_KEY: process.env.TCG_API_KEY,
  },
  images: {
    domains: ["images.pokemontcg.io"],
  },
};

module.exports = nextConfig;
