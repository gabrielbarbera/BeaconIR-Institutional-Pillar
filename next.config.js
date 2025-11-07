/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable ESLint during build for demo
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript checks during build for demo
  typescript: {
    ignoreBuildErrors: true,
  },
  // Exclude templates directory from page generation
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Webpack config to ignore templates directory
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/templates/**', '**/node_modules/**'],
    };
    return config;
  },
};

module.exports = nextConfig;
