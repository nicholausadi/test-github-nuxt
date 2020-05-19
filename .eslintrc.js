module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'],
          ['~', '.'],
        ],
        extensions: ['.vue', '.js'],
      }
    }
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'airbnb-base',
    'prettier',
    'prettier/vue',
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'nuxt/no-cjs-in-config': 'off',
    'import/no-extraneous-dependencies': 'off', // or warn
    'import/prefer-default-export': 'off', // or warn
    'no-restricted-globals': 'off', // or warn
    'func-names': 'off', // or warn
    'vue/require-prop-types': 'warn', // or off
  }
}
