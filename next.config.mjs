/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  // alias: {
  //   assets: path.resolve(__dirname, './src/assets/'),
  //   components: path.resolve(__dirname, './src/components/'),
  //   pages: path.resolve(__dirname, './src/pages/'),
  //   services: path.resolve(__dirname, './src/services/'),
  //   store: path.resolve(__dirname, './src/store/'),
  //   utils: path.resolve(__dirname, './src/utils/'),
  //   types: path.resolve(__dirname, './src/types/'),
  // },
}

export default config

