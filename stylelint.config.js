module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-styled-components"],
    customSyntax: "postcss-styled-syntax",
    plugins: ["stylelint-order"],
    rules: {
        /**
         * Enforce alphabetical order for properties and custom properties before standard
         * @see https://github.com/hudochenkov/stylelint-order
         */
        "order/order": ["custom-properties", "declarations"],
        "order/properties-alphabetical-order": true,
        /** Disable rules which conflict with Emotion */
        "function-no-unknown": null,
        "value-keyword-case": null,
        "function-name-case": null,
        "property-no-unknown": [true, { ignoreProperties: ["should-forward-prop"] }],
        /** Enforce camel-case CSS variable names */
        "custom-property-pattern": [
            "^[a-z][a-zA-Z0-9]+$",
            {
                message: 'Expected "%s" variable name to be lower camelCase',
            },
        ],
        "selector-class-pattern": null,
        "annotation-no-unknown": null,
        "custom-property-empty-line-before": null,
        "block-no-empty": null,
    },
};
