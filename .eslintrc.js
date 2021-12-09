module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.md', 'demo.vue', 'script/*.ts', '*.test.ts'],
            rules: {
                'no-alert': 'off',
                'no-console': 'off',
                'no-undef': 'off',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                'no-restricted-imports': 'off',
            },
        },
    ],
}