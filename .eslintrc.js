module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parser": "babel-eslint",
  "rules": {
    // disable detecting of unused PropTypes because it leads to many false positives for HoCs
    "react/no-unused-prop-types": 0,
    "arrow-parens": ["error", "always"],
    "no-underscore-dangle": ["error", {"allow": ["_id"]}]
  }
};