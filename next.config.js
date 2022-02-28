const { optional, withPlugins } = require("next-compose-plugins");
const nextRuntimeDotenv = require("next-runtime-dotenv");
const nextBuildId = require("next-build-id");
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");
const path = require("path");

// ##### ---Config Plugin---
const nextConfig = {
  useFileSystemPublicRoutes: false,
  generateBuildId: () => {
    return process.env.BUILD_ID ? nextBuildId({ dir: __dirname, describe: true }) : null;
  }, // Chạy để phân tích các Package nặng bao nhiêu load ở đâu ... => Tối ưu hóa
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  // bundleAnalyzerConfig: {
  //   server: {
  //     analyzerMode: "static",
  //     reportFilename: "../bundles/server.html",
  //   },
  //   browser: {
  //     analyzerMode: "static",
  //     reportFilename: "../bundles/client.html",
  //   },
  // },
  // Public config
  publicRuntimeConfig: {
    PROXY_MODE: process.env.PROXY_MODE,
    BASE_URL: process.env.BASE_URL,
    JWT_GUEST: process.env.JWT_GUEST,
    STATIC_PATH: process.env.STATIC_PATH,
    GTM_KEY: process.env.GTM_KEY,
    GA_KEY: process.env.GA_KEY,
    GG_MAP_KEY: process.env.GG_MAP_KEY,
    CDN_PATH: process.env.CDN_PATH,
    SERVICE_CDN_URL: process.env.SERVICE_CDN_URL,
    SERVICE_AUTH_URL: process.env.SERVICE_AUTH_URL,
    SERVICE_SALES_ORDER_URL: process.env.SERVICE_SALES_ORDER_URL,
    SERVICE_SEEKER_URL: process.env.SERVICE_SEEKER_URL,
    SERVICE_STATISTIC_URL: process.env.SERVICE_STATISTIC_URL,
    SERVICE_MIX_URL: process.env.SERVICE_MIX_URL,
    SERVICE_EMPLOYER_URL: process.env.SERVICE_EMPLOYER_URL,
    SERVICE_SURVEY_URL: process.env.SERVICE_SURVEY_URL,
    SERVICE_ARTICLE: process.env.SERVICE_ARTICLE,
    SERVICE_EXPERIMENT: process.env.SERVICE_EXPERIMENT,
    SERVICE_FEATURE_FLAG: process.env.SERVICE_FEATURE_FLAG,
    SERVICE_AUDIENCE: process.env.SERVICE_AUDIENCE,
    TRACKING_KEY: process.env.TRACKING_KEY,
    TRACKING_KEY_V2: process.env.TRACKING_KEY_V2,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    COOKIE_PREFIX: process.env.COOKIE_PREFIX,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
    NO_INDEX: process.env.NO_INDEX,
    TRACKING_URL: process.env.TRACKING_URL,
    BASE_URL_ATS: process.env.BASE_URL_ATS,
    name: "Lotus Cosmetics",
    description: "Lotus Cosmetics",
    keywords: "react.js, next.js",
    themeColor: "#ffffff",
    backgroundColor: "#ffffff",
    NAME_APP: "Code Base",
    THEME_COLOR: "#fffff",
  },
};

// ###### ---Init Config---
const withConfig = nextRuntimeDotenv({
  public: [
    "BASE_URL",
    "GG_MAP_KEY",
    "JWT_GUEST",
    "CDN_PATH",
    "SERVICE_CDN_URL",
    "SERVICE_AUTH_URL",
    "SERVICE_SYSTEM_URL",
    "SERVICE_SALES_ORDER_URL",
    "SERVICE_SEEKER_URL",
    "SERVICE_STATISTIC_URL",
    "SERVICE_MIX_URL",
    "SERVICE_EMPLOYER_URL",
    "SERVICE_SURVEY_URL",
    "SERVICE_ARTICLE",
    "SERVICE_AUDIENCE",
    "FB_APP_ID",
    "COOKIE_PREFIX",
    "GA_TRACKING_ID",
    "COOKIE_DOMAIN",
    "NO_INDEX",
    "BASE_URL_ATS",
  ],
});

const toNextPlugin = (plugin, optKey) => (configNext = {}) => ({
  ...configNext,
  ...{
      // define in which phases this plugin should get applied.
      // you can also use multiple phases or negate them.
      // however, users can still overwrite them in their configuration if they really want to.
      phases: [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],

      webpack(config, options) {
          if (!options.isServer) {
              // eslint-disable-next-line new-cap
              config.plugins.push(
                  // eslint-disable-next-line new-cap
                  new plugin(optKey ? configNext[optKey] : configNext)
              );
          }

          if (typeof configNext.webpack === "function") {
              return configNext.webpack(config, options);
          }

          return config;
      },
  },
});

const withPwaManifest = [
  optional(() =>
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    toNextPlugin(require("webpack-pwa-manifest"), "pwaManifestOps")
  ),
  {
    pwaManifestOps: {
      filename: "static/manifest.json",
      inject: false,
      fingerprints: false,
      includeDirectory: true,
      publicPath: "/_next",
      name: nextConfig.publicRuntimeConfig.name,
      short_name: nextConfig.publicRuntimeConfig.name,
      description: nextConfig.publicRuntimeConfig.description,
      background_color: nextConfig.publicRuntimeConfig.backgroundColor,
      theme_color: nextConfig.publicRuntimeConfig.themeColor,
      display: "standalone",
      orientation: "portrait",
      // start_url: "/?utm_source=HomeScreen",
      // icons: [
      //   {
      //     src: path.resolve("public/static/img/icon/logo.png"),
      //     sizes: [180],
      //     type: "image/png",
      //     destination: "static/icons",
      //     ios: true,
      //   },
      //   {
      //     src: path.resolve("public/static/img/icon/logo.png"),
      //     size: 1024,
      //     type: "image/png",
      //     destination: "static/icons",
      //     ios: "startup",
      //   },
      //   {
      //     src: path.resolve("public/static/img/icon/logo.png"),
      //     sizes: [192, 512],
      //     type: "image/png",
      //     destination: "static/icons",
      //   },
      // ],
    },
  },
  [PHASE_PRODUCTION_BUILD],
];

/*
 Common Config
 Add More here.
 */
module.exports = withConfig(withPlugins([withPwaManifest], nextConfig));