/* Enable bundle analysis. Run `yarn analyze:build` to get report */
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
    output: process.env.PAGES_BUILD === 'true' ? 'export' : undefined,
    basePath: process.env.PAGES_BUILD === 'true' ? '/ts-redux-next' : undefined,
    compiler: {
        styledComponents: true,
    },
});
