import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';
import packageJson from '../package.json'  assert { type: 'json' };;
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

// Access environment variables using Webpack's DefinePlugin or directly set the value
const domain = process.env.PRODUCTION_DOMAIN || 'https://d2enr00ydscyjh.cloudfront.net'; // fallback if env not defined

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js', // Correct content hashing for production builds
    publicPath: '/marketing/latest/', // Ensure this is correctly set for production deployments
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename:'remoteEntry.js',
      exposes:{
        './MarketingApp':'./src/bootstrap.js'
   },
      shared: packageJson.dependencies, // Share dependencies across federated modules
    }),
  ],
};

const setting = merge(commonConfig, prodConfig);
export default setting;
