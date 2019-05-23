import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

const Search = data => {
  return (
    <Layout
      locale={"en"}
      translations={{ nb: { url: "/en/" }, en: { url: "/en/search/" } }}
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
            This page contains too much data
            {/* <pre>{JSON.stringify(data.siteSearchIndex.index, null, 2)}</pre> */}
          </header>
        )}
      />
    </Layout>
  )
}

export default Search
