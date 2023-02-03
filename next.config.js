/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  // Rename or delete `.babelrc` to use built-in SWC transpiler
  compiler: {
    emotion: true,
  }
}

/* Enable bundle analysis. Run `yarn analyze:build` to get report */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)

// module.exports = nextConfig
