module.exports = {
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "@src/(.*)$": "<rootDir>/src/$1",
    "@service/(.*)$": "<rootDir>/src/service/$1",
    "@controllers/(.*)$": "<rootDir>/src/controllers/$1",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  coverageProvider: "v8",
};
