// const path = require("path");
// const withImages = require("next-images");

// module.exports = withImages({
//   esModule: true,
//   exclude: path.resolve(__dirname, "src/assets/svg"),
// });

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
