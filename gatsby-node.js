/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const createPaginatedPages = require("gatsby-paginate")
// Add optional chaining
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve("@babel/plugin-proposal-optional-chaining"),
  })
}

const {
  staticPages,
  archivePages,
  getCategoryLink,
  getArchiveLink,
} = require("./config/site")
const locales = require("./config/i18n")

const getLocalizedSlug = (path, node) =>
  locales[node.locale].default
    ? `${path}${node.slug}`
    : `/${locales[node.locale].path}${path}${node.slug}`

const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // create category pages for each language
  const createCategoryPages = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressHeyCategories {
          edges {
            node {
              term_id
              locale
              name
              slug
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

      const categoryEdges = result.data.allWordpressHeyCategories.edges

      categoryEdges.forEach(edge => {
        if (!edge.node.locale) {
          console.log("Locale missing - not generating node", edge.node.name)
          return false
        }

        createPage({
          path: getCategoryLink(edge.node.locale, edge.node.slug),
          component: path.resolve(
            `./src/templates/${archivePages.category.template}.js`
          ),
          context: {
            id: edge.node.term_id,
            locale: edge.node.locale,
          },
        })
      })

      resolve()
    })
  })

  const createWpPosts = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPost {
          edges {
            node {
              link
              locale
              id
              slug
              title
              date
              year: date(formatString: "YYYY")
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

      let archiveYears = {}

      postEdges.forEach(edge => {
        if (!edge.node.locale) {
          console.log("Locale missing - not generating node", edge.node.link)
          return false
        }

        if (!archiveYears[edge.node.year]) {
          archiveYears[edge.node.year] = {
            ids: [],
          }
        }

        // Push ids to template to query posts from this year
        archiveYears[edge.node.year].ids.push(edge.node.id)

        createPage({
          path: `${edge.node.link}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            id: edge.node.id,
            locale: edge.node.locale,
          },
        })
      })

      /**
       * Generate year archives
       */
      Object.keys(archivePages.year.translations).forEach(locale => {
        Object.keys(archiveYears).forEach(year => {
          const yearItem = archiveYears[year]
          createPage({
            path: getArchiveLink(locale, year),
            component: path.resolve(
              `./src/templates/${archivePages.year.template}.js`
            ),
            context: {
              year,
              locale,
              ids: yearItem.ids,
            },
          })
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

  return Promise.all([
    createWpPosts,
    createWpPages,
    createStaticPages,
    createCategoryPages,
  ])
} // createPages
