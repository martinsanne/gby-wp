import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Search from "../components/Search"

const SearchPage = data => {
  return (
    <Layout
      locale="en"
      translations={{ nb: { url: "/search/" }, en: { url: "/en/search/" } }}
    >
      <StaticQuery
        query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
        render={data => (
          <header>
            <Search searchIndex={data.siteSearchIndex.index} />
          </header>
        )}
      />
    </Layout>
  )
}

export default SearchPage
