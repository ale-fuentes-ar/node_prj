module.exports = {
    "env": {
        "es2021": true,
        "node": true,
    },
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion":  "lastest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {}
}