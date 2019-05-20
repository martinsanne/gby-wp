import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  const page = data.wordpressPage
  const { locale } = pageContext
  return (
    <Layout locale={locale} translations={page.translations}>
      <div>
        <p>Page:</p>
        <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      wordpress_id
      locale
      slug
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
