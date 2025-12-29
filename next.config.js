const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Only look for pages in app directory (ignore src)
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx', 'md'],
  // Exclude src folder from webpack build
  webpack: (config) => {
    // Add rule to ignore src folder
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [path.resolve(__dirname, 'src')],
      use: 'null-loader',
    })
    return config
  },
}

module.exports = nextConfig

