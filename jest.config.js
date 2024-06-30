export default {

  testEnvironment: "jsdom",

   transform: {

     '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',

   },

   setupFilesAfterEnv: ['@testing-library/jest-dom'],
   moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    "^@/(.*)$": "<rootDir>/src/$1"
  },
 };