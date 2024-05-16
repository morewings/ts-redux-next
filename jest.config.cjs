const hq = require('alias-hq');
const nextJest = require('next/jest.js');

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = createJestConfig({
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        ...hq.get('jest'),
        '\\.(gif|ttf|eot|svg|png)$': 'identity-obj-proxy',
        '\\.css$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    modulePathIgnorePatterns: ['<rootDir>/templates/'],
});
