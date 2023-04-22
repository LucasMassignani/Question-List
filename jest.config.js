module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src/'],
  modulePaths: ['<rootDir>/src/'],
  testMatch: ['**/*.spec.ts?(x)', '**/*.test.ts?(x)'],
};
