import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import("eslint").Linter.FlatConfig} */
export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                test: 'readonly',
                expect: 'readonly',
            },
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            'no-undef': 'error', // Это правило для проверки не определенных переменных
        },
    },
    pluginJs.configs.recommended,
];