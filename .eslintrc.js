module.exports = {
  env: {
    browser: true,
    es6: true,
    "commonjs": true,

  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  "parser": "babel-eslint",
  plugins: [
    'react'
  ],
  rules: {
  }
}
