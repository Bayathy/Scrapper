module.exports = {
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
        "!<rootDir>/*.config.js",
    ],
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["./jest.setup.js"],
    testMatch: ["**/?(*.)+(test).(j|t)s?(x)"],
    transform: {
        "^.+\\.(js|ts|tsx)$": "babel-jest",
    },
};
