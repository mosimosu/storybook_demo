module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "vite-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^#/(.*)$": "<rootDir>/src/components/$1",
    },
};
