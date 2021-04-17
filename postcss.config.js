

const purgecss = [
    "@fullhuman/postcss-purgecss",
    {
        // https://purgecss.com/configuration.html#options
        content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
        css: [],
        plugins: [
            "postcss-flexbugs-fixes",
            [
                "postcss-preset-env",
                {
                    "autoprefixer": {
                        "flexbox": "no-2009"
                    },
                    "stage": 3,
                    "features": {
                        "custom-properties": false
                    }
                }
            ]
        ],
        whitelistPatternsChildren: [/monaco-editor/], // so it handles .monaco-editor .foo .bar
        defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
    }
];
