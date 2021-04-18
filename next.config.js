const webpack = require('webpack');
const withOffline = require('next-offline')

module.exports = (phase, { defaultConfig }) => {

    // const pwa = withPWA({
    //     pwa: {
    //         dest: "public",
    //         register: true,
    //         skipWaiting: true
    //     }
    // })
    return withOffline({...Object.assign({}, defaultConfig, {
            webpack(config, options) {
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

                return config;
            }
        }), pwa:{
            dest: "public",
            register: true,
            skipWaiting: true
        }});
}
