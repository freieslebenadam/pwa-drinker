const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Drinker",
    theme_color: "#2c2c54",
    msTileColor: "#2c2c54",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#2c2c54",
    // workboxPluginMode: "InjectManifest",
    // workboxOptions: {
    //   swSrc:
    // }
    manifestOptions: {
      background_color: "#fff"
    }
  }
});
