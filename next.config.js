/** @type {import('next').NextConfig} */
const nextConfig = {}
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/my-portfolio' : '',
  assetPrefix: isProd ? '/my-portfolio/' : '',
};

module.exports = nextConfig
