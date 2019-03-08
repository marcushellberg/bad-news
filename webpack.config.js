const path = require('path');
const merge = require('webpack-merge');
const createDefaultConfig = require('@open-wc/building-webpack/default-config');
const WorkBoxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const workboxPlugin = new WorkBoxPlugin.GenerateSW({
  runtimeCaching: [
    {
      urlPattern: new RegExp('https://newsapi\\.org.*'),
      handler: 'NetworkFirst',
      options: {
        cacheName: 'dynamic'
      }
    },
    {
      urlPattern: new RegExp('https?://.*\\.(?:png|jpg|jpeg|svg)$'),
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 100
        }
      }
    }
  ]
});
const defaultConfig = createDefaultConfig({
  indexHTML: path.resolve(__dirname, './src/index.html'),
  indexJS: path.resolve(__dirname, './src/index.js')
});

module.exports = merge(defaultConfig, {
  plugins: [workboxPlugin, new CopyWebpackPlugin([{ from: './src/manifest.webmanifest' }])]
});
