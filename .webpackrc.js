const path = require("path")
// https://github.com/sorrycc/roadhog/issues/36 分析 bundle 插件 const
// BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
export default {
    "extraBabelPlugins" : [
        [
            "import", {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": "css"
            }
        ]
    ],
    "alias" : {
        "@": path.resolve(__dirname, './src')
    }
}

// module.exports = function (webpackConfig, env) {
//     // webpackConfig = {
//     //     "extraBabelPlugins": [
//     //         [
//     //             "import", {
//     //                 "libraryName": "antd",
//     //                 "libraryDirectory": "es",
//     //                 "style": "css"
//     //             }
//     //         ]
//     //     ],
//     //     "alias": {
//     //         "@": path.resolve(__dirname, './src')
//     //     }
// 		// }
// 		webpackConfig.resolve.alias={
// 			"@": path.resolve(__dirname, './src')
// 		}
//     //对 readhog 默认配置进行操作     if (env === 'development') {}     return
// 		return webpackConfig
// }
