const pwa_config = {
      manifest: {
            name: 'بیمه عمر | شرکت بیمه زندگی خاورمیانه | بهترین بیمه عمر',
            short_name: 'بیمه خاورمیانه',
            description: 'شرکت بیمه زندگی خاورمیانه اولین شرکت تخصصی بیمه های عمر و ارائه دهنده متنوع ترین محصولات در بیمه های عمر شامال بیمه عمر وسرمایه گذاری، بیمه مستمری عمر و بازنشستگی، بیمه عمر زمانی ، بیمه تمام عمر ، بیمه های عمر پس انداز و بیمه سنوات کارکنان می باشد.',
            start_url: '/',
            lang: 'fa',
            dir: 'rtl',
            display: 'standalone',
            background_color: '#fff',
            msTile_color: '#000000',
            theme_color: '#5491f9',
            orientation: 'any',
            appleMobileWebAppCapable: 'yes',
            appleMobileWebAppStatusBarStyle: 'black',
      },
      icon: {
            source: './static/images/logo/logo-512.png',
            fileName: 'logo-512.png'
      },
      workbox: {
            offlineStrategy: 'CacheFirst',
            swScope: '.'
      }
};

export default pwa_config;
