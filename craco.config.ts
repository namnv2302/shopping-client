import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({
          webpackConfig,
        }: {
          webpackConfig: any;
          context: { env: string };
        }) => {
          webpackConfig.resolve.plugins = [
            ...webpackConfig.resolve.plugins,
            new TsconfigPathsPlugin({
              configFile: "./tsconfig.json",
              extensions: [".ts", ".tsx"],
            }),
          ];
          return webpackConfig;
        },
      },
      options: {},
    },
  ],
};

export {};
