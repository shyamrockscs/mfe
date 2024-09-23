import {merge} from 'webpack-merge';
import commonConfig from './webpack.common.js';
import ModuleFederationPlugin  from 'webpack/lib/container/ModuleFederationPlugin.js';
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8082,
    historyApiFallback: { // Corrected property name
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'container',
      remotes:{
        marketing:'marketing@http://localhost:8081/remoteEntry.js'
      }
    }),
   s
  ],
};

// Correct export
export default merge(commonConfig, devConfig);
