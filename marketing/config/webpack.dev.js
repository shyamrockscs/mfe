import {merge} from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import commonConfig from './webpack.common.js';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: { // Corrected property name
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
        name:'marketing',
        filename:'remoteEntry.js',
        exposes:{
             './MarketingApp':'./src/bootstrap.js'
        }
       
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

// Correct export
export default merge(commonConfig, devConfig);
