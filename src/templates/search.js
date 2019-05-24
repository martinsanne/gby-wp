import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Search from "../components/Search"
// import { SEOHeaders } from "../components/utils"

export default ({ data, pageContext }) => {
  const { locale, translations } = pageContext
  return (
    <Layout locale={locale} translations={translations}>
      <Search locale={locale} searchIndex={data.siteSearchIndex.index} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`
