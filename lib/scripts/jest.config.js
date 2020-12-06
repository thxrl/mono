module.exports = {
    roots             : [
        "./src"
    ],
    testMatch         : [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform         : {
        "^.+\\.(ts|tsx)$" : "ts-jest"
    },
    moduleDirectories : [
        "node_modules",
        "src"
    ],
    setupFiles        : [
        "./testSetup.ts"
    ],
    globals           : {
        'ts-jest' : {
            diagnostics : true,
            packageJson : 'package.json',
            tsConfig    : 'tsconfig.jest.json'
        }
    }
};
