import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 22754 }) {
      title
      locale
      acf {
        poster_sections {
          poster_lists {
            artists {
              title {
                rendered
              }
            }
          }
        }
      }
      translations {
        en {
          url
        }
        nb {
          url
        }
      }
    }
    allWordpressPost(
      sort: { fields: [date], order: DESC }
      limit: 10
      filter: { locale: { eq: "nb" } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "Do MMMM")
          type
          locale
          link
        }
      }
    }
  }
`

class IndexPage extends Component {
  render() {
    const { data } = this.props
    const { wordpressPage } = data
    return (
      <Layout
        locale={wordpressPage.locale}
        translations={wordpressPage.translations}
      >
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>{wordpressPage.title}</h1>
        <pre>{JSON.stringify(wordpressPage, null, 2)}</pre>
        <p>
          There are {data.allWordpressPost.totalCount} posts in total.{" "}
          <Link to="/posts">See all</Link>
        </p>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.link}>
              <h4>
                <span dangerouslySetInnerHTML={{ __html: node.title }} /> -{" "}
                {node.date}
              </h4>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
      </Layout>
    )
  }
}

export default IndexPage
