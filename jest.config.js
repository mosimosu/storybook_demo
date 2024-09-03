export default {
    testEnvironment: "jest-environment-jsdom",
    transform: {
        "^.+\\.tsx?$": ["ts-jest", { tsconfig: { jsx: "react" } }],
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^#/(.*)$": "<rootDir>/src/components/$1",
    },
};
