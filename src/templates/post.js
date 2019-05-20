import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      date(formatString: "Do MMMM YYYY")
      content
      wordpress_id
      translations {
        nb {
          url
        }
        en {
          url
        }
      }
    }
  }
`

export default ({ data, pageContext, translations, ...rest }) => {
  const post = data.wordpressPost
  const { locale } = pageContext
  return (
    <Layout translations={translations} locale={locale}>
      <div>
        <p>Post:</p>
        {post.wordpress_id} - {locale}
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <h3>date: {post.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
