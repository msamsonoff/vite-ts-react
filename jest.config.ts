import { Config } from 'jest'

const config: Config = {
    setupFilesAfterEnv: [
        '<rootDir>/setup-jest.ts'
    ],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
}

export default config
