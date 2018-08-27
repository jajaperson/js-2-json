module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'google',
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    'no-console': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
}
