const commonConfig = {
    module: {
      rules: [
        {
        test: /\.m?js/,
            resolve: {
              fullySpecified: false,
            }, // Match both .js and .mjs files
          exclude: /node_modules/,  // Correctly exclude node_modules
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],  // Babel presets for React and ES6+
              plugins: ['@babel/plugin-transform-runtime'],  // Plugin to handle runtime transformation
            },
          },
        },
      ],
    },
  };
  
  export default commonConfig ;  // ES Module export
  