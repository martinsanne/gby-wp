import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

/**
 * Page templates
 */
import FrontPage from "../components/FrontPage"
import Page from "../components/Page"
import GreenCopper from "../components/GreenCopper"

const pageTemplates = {
  homepage: FrontPage,
  greencopper: GreenCopper,
  default: Page,
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
