require('webpack');
const withOffline = require('next-offline')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const withTM = require("next-transpile-modules")([
    // `monaco-editor` isn't published to npm correctly: it includes both CSS
    // imports and non-Node friendly syntax, so it needs to be compiled.
    "monaco-editor"
]);


module.exports = (phase, {defaultConfig}) => () => {

    // const pwa = withPWA({
    //     pwa: {
    //         dest: "public",
    //         register: true,
    //         skipWaiting: true
    //     }
    // })
    return withTM(withOffline({
        ...Object.assign({}, defaultConfig, {
            webpack(config, options) {

                const rule = config.module.rules
                    .find(rule => rule.oneOf)
                    .oneOf.find(
                        r =>
                            // Find the global CSS loader
                            r.issuer && r.issuer.include && r.issuer.include.includes("_app")
                    );
                if (rule) {
                    rule.issuer.include = [
                        rule.issuer.include,
                        // Allow `monaco-editor` to import global CSS:
                        /[\\/]node_modules[\\/]monaco-editor[\\/]/
                    ];
                }

                config.plugins.push(
                    new MonacoWebpackPlugin({
                        languages: [
                            "json",
                            "markdown",
                            "css",
                            "typescript",
                            "javascript",
                            "html",
                            "graphql",
                            "python",
                            "scss",
                            "yaml"
                        ],
                        filename: "static/[name].worker.js"
                    })
                );


                config.module.rules.push({
                    test: /\.(graphql|gql)$/,
                    use: [require.resolve('graphql-tag/loader')]
                });

                if (typeof defaultConfig.webpack === "function") {
                    return defaultConfig.webpack(config, options);
                }
                // config.pwa =  {
                //     dest: "public",
                //         register: true,
                //         skipWaiting: true
                // }

                config.plugins.push(new MiniCssExtractPlugin({ filename: 'monaco.css' }))

                return config;
            }
        }), pwa: {
            dest: "public",
            register: true,
            skipWaiting: true
        }
    }));
}
