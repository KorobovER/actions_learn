import globals from "globals";
import pluginJs from "@eslint/js";

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
            },
        },
        rules: {
            'no-console': 'warn',
        },
    },
    pluginJs.configs.recommended,
];