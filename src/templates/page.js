import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

/**
 * Page templates
 */
import FrontPage from "../components/FrontPage"
import Page from "../components/Page"
import GreenCopper from "../components/GreenCopper"
import PartnerPageContainer from "../components/PartnerPageContainer"
import GalleryPageContainer from "../components/GalleryPageContainer"

const pageTemplates = {
  homepage: FrontPage,
  greencopper: GreenCopper,
  default: Page,
  partners: PartnerPageContainer,
  gallery: GalleryPageContainer,
}

const resolvePageTemplate = name => {
  if (pageTemplates[name]) {
    return pageTemplates[name]
  }
  return pageTemplates.default
}

export default ({ data, pageContext }) => {
  const page = data.wordpressPage
  const { locale } = pageContext
  const MyTmpl = resolvePageTemplate(page.template)
  return (
    <Layout locale={locale} translations={page.translations}>
      <MyTmpl page={page} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
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
