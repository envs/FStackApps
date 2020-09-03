module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };





// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: __dirname + '/public',
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.json$/,
//                 loader: 'json-loader'
//             },
//             {
//               test: /\.js$/,
//               loader: 'babel-loader'
//           }
//         ]
//     }
// };