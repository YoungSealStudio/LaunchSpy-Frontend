const prettierConfig = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
}

module.exports = {
  extends: ['tonyfromundefined'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': ['error', prettierConfig, { usePrettierrc: false }],
  },
}
