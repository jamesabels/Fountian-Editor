module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "no-new": "off",
    "indent": "off",
    "no-eval": "off",
    "no-mutiple-empty-lines": "off",
    "no-path-concat": "off"
  }
}
