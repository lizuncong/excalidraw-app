## 接入 excalidraw

首先 clone excalidraw 源码，并修改 excalidraw 打包配置

在 src/packages/excalidraw 下找到 webpack.dev.config.js 以及 webpack.prod.config.js，在 DefinePlugin 中添加以下配置

```js
plugins: [
  new webpack.DefinePlugin({
    "process.env": parseEnvVariables(
      path.resolve(__dirname, "../../../.env.development")
    ),
    "window.EXCALIDRAW_ASSET_PATH": JSON.stringify("./"),
  }),
];
```

然后在当前目录下执行`yarn run build:umd`打包，复制 dist 目录

在当前项目，本例中是`excalidraw-app`，先运行`yarn add @excalidraw/excalidraw` 安装 excalidraw，然后将上面打包的 dist 覆盖 node_modules/@excalidraw/excalidraw 下面的 dist。如果将 excalidraw 私有化后，这一步可以省略

修改`excalidraw-app`的打包配置，使用 copy-webpack-plugin 拷贝 node_modules/@excalidraw/excalidraw 下面的静态资源文件

```js
new CopyPlugin({
  patterns: [
    {
      from: path.join(
        __dirname,
        "../node_modules/@excalidraw/excalidraw/dist/excalidraw-assets"
      ),
      to: paths.appBuild + "/excalidraw-assets",
    },
    {
      from: path.join(
        __dirname,
        "../node_modules/@excalidraw/excalidraw/dist/excalidraw-assets-dev"
      ),
      to: paths.appBuild + "/excalidraw-assets-dev",
    },
  ],
});
```

## 本地开发

本地开发可以使用 npm link 方式引入
