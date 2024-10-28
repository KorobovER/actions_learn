/** @type {import("eslint").Linter.Config} */
const config = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended' // если используете Prettier
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // если используете React
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'no-console': 'warn',
        // другие правила
    },
};

module.exports = config;