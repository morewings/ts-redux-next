/* Enable bundle analysis. Run `pnpm run analyze:build` to get report */
/* eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true,
    distDir: 'build',
    cleanDistDir: true,
});
