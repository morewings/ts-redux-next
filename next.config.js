/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    distDir: 'build',
    compiler: {
        styledComponents: true
    }
};

/* Enable bundle analysis. Run `yarn analyze:build` to get report */
/* eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});
module.exports = withBundleAnalyzer(nextConfig);

// module.exports = nextConfig
