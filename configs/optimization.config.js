import cache_config from "./cache.config";

const cache_expire_timestamp = cache_config.expire_timestamp;

const optimization_config = {
      extractCSS: {
            ignoreOrder: true
      },
      optimization: {
            splitChunks: {
                  chunks: 'async',
            }
      },
      splitChunks: {
            pages: false,
            vendor: false,
            commons: false,
            runtime: false,
            layouts: false
      },
      filenames: {
            app: ({isDev}) => isDev ? '[name].js' : '[contenthash].js?expires=' + cache_expire_timestamp,
            chunk: ({isDev}) => isDev ? '[name].js' : '[contenthash].js?expires=' + cache_expire_timestamp,
            css: ({isDev}) => isDev ? '[name].css' : '[contenthash].css?expires=' + cache_expire_timestamp,
            img: ({isDev}) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]?expires=' + cache_expire_timestamp,
            font: ({isDev}) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]?expires=' + cache_expire_timestamp,
            video: ({isDev}) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ex]?expires=' + cache_expire_timestamp
      },
};

export default optimization_config;
