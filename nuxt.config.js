import env from './configs/process.config'
import pwa_config from "./configs/pwa.config";
import optimization_config from "./configs/optimization.config";
import purgecss_config from './configs/purgecss.config'

const routerBase =
      process.env.DEPLOY_ENV === "GH_PAGES" ? {router: {base: "/sazino-nuxt/"}} : {}; 
export default {
      mode: 'universal',
      server: {
            port: 7000,
            host: '0.0.0.0', // default: localhost,
      },
      baseUrl: '/',
      router: {
            base: '/'
      },
      htmlAttrs: {
            lang: 'fa',
            dir: 'rtl',
            translate: "no"
      },
      pageTransition: 'fade',
      layoutTransition: 'fade',
      head: {
            title: 'گروه فنی مهندسی سازینو',
            meta: [
                  { charset: 'utf-8' },
                  { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
                  { hid: 'description', name: 'description', content: 'App description' },
                  { hid: 'robots', name: 'robots', content: 'noindex, nofollow' },
                  { hid: 'og:title', name: 'og:title', content: 'گروه فنی مهندسی سازینو' },
                  { hid: 'og:description', name: 'og:description', content: 'گروه فنی مهندسی سازینو، تولید کننده و توسعه دهنده ی سازه های غشایی و چادری' },
                  { hid: 'og:site_name', name: 'og:site_name', content: 'گروه فنی مهندسی سازینو' },
                  { hid: 'og:type', name: 'og:type', content: 'website' },
                  { hid: 'og:url', name: 'og:url', content: 'https://sazino.org' },
                  { hid: 'og:image', name: 'og:image', content: 'گروه فنی مهندسی سازینو' },
                  { hid: 'og:image:width', name: 'og:image:width', content: '100' },
                  { hid: 'og:image:height', name: 'og:image:height', content: '100' },
                  { hid: 'og:image:alt', name: 'og:image:alt', content: '/images/logo/logo-128.png' },
            ],
            link: [{ rel: 'icon', type: 'image/x-icons', href: '/favicon.png' }]
      },
      loading: {
            color: '#f7941e',
            height: '3px'
      },
      //css: ['~/scss/main.scss'],
      plugins: [
            { src: '~/plugins/mixins' },
            { src: '~/plugins/directives' },
      ],
      modules: [
            '@nuxtjs/axios',
            '@nuxtjs/pwa',
            'nuxt-purgecss',
            'cookie-universal-nuxt',
            '@nuxtjs/style-resources',
      ],
      styleResources: {
            scss: [
                  '~/scss/main.scss',
            ]
      },
      purgeCSS: purgecss_config,
      pwa: pwa_config,
      axios: {
            baseURL: process.env.NODE_ENV === 'production' ? env.NUXT_APP_PRODUCTION_API_BASE_URL : env.NUXT_APP_DEVELOPMENT_API_BASE_URL
      },
      build: {
            extractCSS: optimization_config.extractCSS,
            optimization: optimization_config.optimization,
            splitChunks: optimization_config.splitChunks,
            filenames: optimization_config.filenames,
      }
}
