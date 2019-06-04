import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

/**
 * Page templates
 */
import { SEOHeaders } from "../components/utils"
import TemplateResolver from "../components/TemplateResolver"

export default ({ data, pageContext }) => {
  const page = data.wordpressPage
  const { locale } = pageContext
  return (
    <Layout locale={locale} translations={page.translations}>
      <SEOHeaders data={page} />
      <TemplateResolver page={page} locale={locale} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressHeySettings {
      edges {
        node {
          locale
          page_for_posts {
            wordpress_id
          }
        }
      }
    }
    wordpressPage(id: { eq: $id }) {
      template
      title
      content
      wordpress_id
      locale
      slug
      ...AcfFrontPageArtists
      featured_image {
        wordpress_id
        title
        url
        alt
        description
        caption
        name
        mime_type
        subtype
        width
        height
        sizes {
          thumbnail
          thumbnail_width
          thumbnail_height
          medium
          medium_width
          medium_height
          medium_large
          medium_large_width
          medium_large_height
          large
          large_width
          large_height
          small
          small_width
          small_height
          medium_small
          medium_small_width
          medium_small_height
          xlarge
          xlarge_width
          xlarge_height
        }
      }
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
