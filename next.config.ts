import { withSentryConfig } from "@sentry/nextjs";     
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  typescript:{
    ignoreBuildErrors: true
  },
  eslint:{
    ignoreDuringBuilds: true
  },
  images:{
    dangerouslyAllowSVG:true,
    remotePatterns:[
      {
        protocol:'https',
        hostname:'*',
      }
    ]
  },
  experimental:{
    ppr:"incremental",
    after:true,
  },
  devIndicator:{
    appIsrStatus:true,
    buildActivity:true,
    buildActivityPosition:'bottom-right'
  },
};
 
// next.config.mjs

export default withSentryConfig(withSentryConfig(nextConfig, {

org: "national-institute-of-techn-05",
project: "javascript-nextjs",
silent: !process.env.CI,
widenClientFileUpload: true,   
reactComponentAnnotation: {
enabled: true,
},
tunnelRoute: "/monitoring",
hideSourceMaps: true,
disableLogger: true,
automaticVercelMonitors: true,






// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options
// Only print logs for uploading source maps in CI 
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
// Automatically annotate React components to show their full name in breadcrumbs and session replay 


// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
// Hides source maps from generated client bundles 
// Automatically tree-shake Sentry logger statements to reduce bundle size
// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
}), {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

org: "national-institute-of-techn-05",
project: "javascript-nextjs",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,

// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Automatically annotate React components to show their full name in breadcrumbs and session replay
reactComponentAnnotation: {
enabled: true,
},

// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
});


module.exports = nextConfig;