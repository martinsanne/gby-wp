/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const createPaginatedPages = require("gatsby-paginate")
const { staticPages } = require("./config/site")
const locales = require("./config/i18n")
const getLocalizedSlug = (path, node) =>
  locales[node.locale].default
    ? `${path}${node.slug}`
    : `/${locales[node.locale].path}${path}${node.slug}`

const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createWpPosts = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPost {
          edges {
            node {
              link
              locale
              type
              id
              slug
              title
              date
              excerpt
            }
          }
        }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(results.errors)
        reject(result.error)
      }

      const postEdges = result.data.allWordpressPost.edges

      /**
       * Create blog index for each language
       */
      /*
      Object.keys(locales).map(locale => {
        const postEdgesLang = postEdges.filter(
          item => item.node.locale === locale
        )
        createPaginatedPages({
          edges: postEdgesLang,
          createPage: createPage,
          pageTemplate: "src/templates/blog.js",
          pageLength: 10, // This is optional and defaults to 10 if not used
          pathPrefix: locales[locale].default ? `nyheter` : `${locale}/news`, // This is optional and defaults to an empty string if not used
          context: {
            locale,
          }, // This is optional and defaults to an empty object if not used
        })
      })*/

      postEdges.forEach(edge => {
        // slug = getLocalizedSlug("/posts/", edge.node)
        if (!edge.node.locale) {
          console.log("Locale missing - not generating node", edge.node.link)
          return false
        }

        createPage({
          path: `${edge.node.link}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            id: edge.node.id,
            locale: edge.node.locale,
          },
        })
      })

      resolve()
    }) // query.then
  }) // createWpPosts

  const createWpPages = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPage {
          edges {
            node {
              link
              id
              slug
              title
              date
              excerpt
              locale
              template
            }
          }
        }
      }
    `)

    query.then(result => {
      if (result.errors) {
        console.error(result.errors)
        reject(result.errors)
      }

      const pageEdges = result.data.allWordpressPage.edges
      pageEdges.forEach(edge => {
        if (edge.node.template === "homepage") {
          edge.node.slug = ""
          edge.node.link = getLocalizedSlug("/", edge.node)
        }

        if (!edge.node.locale) {
          console.log("Locale missing - not generating node", edge.node.link)
          return false
        }
        // slug = getLocalizedSlug("/", edge.node)
        createPage({
          path: `${edge.node.link}`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            id: edge.node.id,
            locale: edge.node.locale,
          },
        })
      })

      resolve()
    }) // query.then
  }) // createWpPages

  /**
   * Generate static pages
   */
  const createStaticPages = new Promise((resolve, reject) => {
    // Iterate through all static pages
    Object.keys(staticPages).map(slug => {
      // Main page settings
      const page = staticPages[slug]
      const { translations } = page
      // Generate page for each translation
      Object.keys(translations).map(locale => {
        // Get translated item
        const item = translations[locale]
        // Generate page for item
        createPage({
          path: `${item.url}`,
          component: path.resolve(`./src/templates/${page.template}.js`),
          context: {
            locale,
            translations,
          },
        })
      })
    })

    resolve()
  })

  return Promise.all([createWpPosts, createWpPages, createStaticPages])
} // createPages
