const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    workboxOptions: {
      navigateFallback: "/index.html",
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [{
        urlPattern: new RegExp('APU_URL'),
        handler: "NetworkFirst",
        options: {
          networkTimeoutSeconds: 20,
          cacheName: "api-cache",
          cacheableResponse: {
            statuses: [0, 200],
          }
        }
      }]
    },
    manifestOptions: {
      name: "Drinker",
      theme_color: "#2c2c54",
      msTileColor: "#2c2c54",
      appleMobileWebAppCapable: "yes",
      appleMobileWebAppStatusBarStyle: "#2c2c54",
      background_color: "#fff",
    }
  }
});
