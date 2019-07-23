var striptags = require("striptags")
var proxy = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://oyafestivalen.no`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: `503736706494545`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-26899679-4",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/_preview/**"],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        cookieDomain: "oyafestivalen.no",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-extract-schema`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/_preview/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-portal`,
    // {
    //   resolve: `gatsby-plugin-intl`,
    //   options: {
    //     // language JSON resource path
    //     path: `${__dirname}/src/intl`,
    //     // supported language
    //     languages: [`en`, `nb`],
    //     // language file path
    //     defaultLanguage: `nb`,
    //     // option to redirect to `/nb` when connecting `/`
    //     redirect: false,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/src/lambda`,
        functionsOutput: `${__dirname}/functions`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Øyafestivalen`,
        short_name: `Øyafestivalen`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/oyafestivalen-app-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `excerpt`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          wordpress__POST: {
            title: node => node.title,
            link: node => node.link,
            locale: node => node.locale,
            content: node => {
              return striptags(node.content)
            },
            featured_image: node => {
              return node.featured_image
            },
            excerpt: node => {
              return striptags(node.excerpt)
            },
          },
          wordpress__PAGE: {
            title: node => node.title,
            link: node => node.link,
            locale: node => node.locale,
            content: node => {
              return striptags(node.content)
            },
            featured_image: node => {
              return node.featured_image
            },
            excerpt: node => {
              return striptags(node.excerpt)
            },
          },
          // wordpress__wp_partner: {
          //   title: node => node.title,
          //   link: node => node.link,
          //   filter: () => 'document',
          // },
        },
      },
    },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from Wordpress.
     */
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: "api.oyafestivalen.no", // 155538-www.web.tornado-node.net
        // The protocol. This can be http or https.
        protocol: "https",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on wordpress.com.
        // Defaults to true.
        useACF: true,
        // Include specific ACF Option Pages that have a set post ID
        // Regardless if an ID is set, the default options route will still be retrieved
        // Must be using V3 of ACF to REST to include these routes
        // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
        // routes with the ID option_page_1 and option_page_2
        // Dashes in IDs will be converted to underscores for use in GraphQL
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          // htaccess_user: "your-htaccess-username",
          // htaccess_pass: "your-htaccess-password",
          // htaccess_sendImmediately: false,
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password,
          // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
          // wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          // wpcom_app_clientId: "54793",
          // wpcom_user: "gatsbyjswpexample@gmail.com",
          // wpcom_pass: process.env.WORDPRESS_PASSWORD,
          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in wordpress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
          // jwt_user: process.env.JWT_USER,
          // jwt_pass: process.env.JWT_PASSWORD,
          // jwt_base_path: "/jwt-auth/v1/token" # Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 10,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://source-url.com",
        //   replacementUrl: "https://replacement-url.com",
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "/hey/v1/acfoptions",
          "/hey/v1/settings",
          "/hey/v1/global",
          "/hey/v1/menus",
          "/hey/v1/categories",
          "**/posts",
          "**/pages",
          // "**/media",
          // "**/categories",
          // "**/tags",
          "**/gallery",
          "**/partner",
          "**/location",
          "**/artist",
          "**/partner_cat",
          // "/acf/**",
        ],
        // Blacklisted routes using glob patterns
        // excludedRoutes: [
        // "/regenerate-thumbnails/**",
        // "/hey/v1/search",
        // "/hey/v1/custom",
        // "/hey/v1/loggedin",
        // "/wp/v2/settings",
        // "/wp/v2/blocks",
        // "/wp/v2/types",
        // "/wp/v2/statuses",
        // // "/wp/v2/taxonomies",
        // "**/users/**",
        // // "**/tags",
        // // "**/categories",
        // "**/comments",
        // "**/media",
        // "**/themes",
        // "**/search",
        // "/yoast/**",
        // ],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          /**
           * Set template names for front page and blog page to make them easy to query with graphql
           */
          let blogPageIds = []
          let frontPageIds = []

          // Get the IDs first
          entities.forEach(entity => {
            if (entity.__type === "wordpress__hey_settings") {
              if (entity.page_for_posts && entity.page_for_posts.wordpress_id) {
                blogPageIds.push(entity.page_for_posts.wordpress_id)
              }
              if (entity.page_on_front && entity.page_on_front.wordpress_id) {
                frontPageIds.push(entity.page_on_front.wordpress_id)
              }
            }
          })

          // Add template names to the selected IDs
          entities = entities.map(entity => {
            if (entity.__type === "wordpress__PAGE") {
              if (
                blogPageIds.indexOf(entity.wordpress_id) !== -1 &&
                !entity.template
              ) {
                entity.template = "blog"
              }
              if (
                frontPageIds.indexOf(entity.wordpress_id) !== -1 &&
                !entity.template
              ) {
                entity.template = "homepage"
              }
            }
            return entity
          })

          return entities
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [
          `Array.prototype.includes`,
          `Array.prototype.forEach`,
          `Array.prototype.reduce`,
          `Array.prototype.filter`,
          `Array.prototype.map`,
          `fetch`,
          `requestAnimationFrame`,
        ],
      },
    },
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000/",
        pathRewrite: {
          "^/\\.netlify/functions": "",
        },
      })
    )
  },
}
