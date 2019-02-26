/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createPaginatedPages = require("gatsby-paginate")

const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const createWpPosts = new Promise((resolve, reject) => {
    const query = graphql(`
      {
        allWordpressPost {
          edges {
            node {
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

      createPaginatedPages({
        edges: postEdges,
        createPage: createPage,
        pageTemplate: "src/templates/index.js",
        pageLength: 10, // This is optional and defaults to 10 if not used
        pathPrefix: "posts", // This is optional and defaults to an empty string if not used
        context: {}, // This is optional and defaults to an empty object if not used
      })

      postEdges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            id: edge.node.id,
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
        console.error(result.errors)
        reject(result.errors)
      }

      const pageEdges = result.data.allWordpressPage.edges
      pageEdges.forEach(edge => {
        createPage({
          path: `/${edge.node.slug}`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            id: edge.node.id,
          },
        })
      })

      resolve()
    }) // query.then
  }) // createWpPages

  return Promise.all([createWpPosts, createWpPages])
} // createPages
