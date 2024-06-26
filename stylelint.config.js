module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
    rules: {
        'function-calc-no-unspaced-operator': true,
        'order/order': ['custom-properties', 'declarations'],
        'order/properties-alphabetical-order': true,
        'property-no-vendor-prefix': true,
        'media-feature-name-no-vendor-prefix': true,
        'at-rule-no-vendor-prefix': true,
        'selector-no-vendor-prefix': true,
        'max-nesting-depth': 3,
        'selector-max-compound-selectors': 5,
        'selector-class-pattern': [
            '^[a-z][a-zA-Z0-9]+$',
            {
                message: 'Expected "%s" variable name to be lower camelCase',
            },
        ],
    },
    plugins: ['stylelint-order'],
    ignoreFiles: ['**/*.snap'],
};
