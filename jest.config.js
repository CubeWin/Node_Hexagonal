/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],
  roots: ['<rootDir>/src'],
  testMatch: ["<rootDir>/src/**/*.test.ts"],
  testPathIgnorePatterns: ['node_modules', 'build'],
  transform: {
    '^.+\\.(ts)$@': 'ts-jest',
  },
};