const path = require('path');

module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser')
    }
  }
};