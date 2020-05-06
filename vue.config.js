// const path = require('path')
// const webpack = require('webpack')
// module.exports = {
//   devServer: {
//     open: true,
//     overlay: {
//       warnings: false,
//       errors: true
//     }},
// }
const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 开启 CSS source maps?
    css:{
        sourceMap: false,
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("utils", resolve("src/utils"));
    },
    
  module: {
        rules: [
          //  此处省略无数行，已有的的其他的规则
          {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
          }
        ]
    }
};
    
