import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }, limit: 10) {
      totalCount
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "Do MMMM")
        }
      }
    }
  }
`

class IndexPage extends Component {
  componentDidMount() {
    console.log("i mounted", window)
  }

  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Welcome to the Gatsby demo</h1>
        <p>
          There are {data.allWordpressPost.totalCount} posts in total.{" "}
          <Link to="/posts">See all</Link>
        </p>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={"/" + node.slug}>
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
