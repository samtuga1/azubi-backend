module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest", // Transforms .ts files using ts-jest
  },
  testMatch: ["**/*.test.ts"], // Match .test.ts files
  moduleFileExtensions: ["ts", "js"], // Support both TS and JS files
};
