module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./__tests__/setup.js'],
  testMatch: ['**/__tests__/**/*.test.js'],
  globals: {
    MONGODB_VERSION: '7.0.3'
  },
  testTimeout: 3000,
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
}; 