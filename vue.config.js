module.exports = {
  // publicPath: "./",
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false,
  pwa: {
    iconPaths: {
      favicon32: "logo.png",
      favicon16: "logo.png",
      appleTouchIcon: "logo.png",
      maskIcon: "logo.png",
      msTileImage: "logo.png"
    }
  }
};
