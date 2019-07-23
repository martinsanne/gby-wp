import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SearchContainer from "../components/SearchContainer"

export default ({ data, pageContext }) => {
  const { locale, translations } = pageContext
  return (
    <Layout
      locale={locale}
      translations={translations}
      options={data.wordpressHeyAcfoptions}
      settings={data.wordpressHeySettings}
    >
      <article className="Page">
        <SearchContainer locale={locale} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($locale: String!) {
    wordpressHeyAcfoptions(locale: { eq: $locale }) {
      locale
      options {
        url_app_download_android
        url_app_download_ios
        tickets_button_text
        tickets_sold_out
        tickets_url
        partners_main {
          title {
            rendered
          }
        }
      }
    }

    wordpressHeySettings(locale: { eq: $locale }) {
      locale
      page_for_posts {
        wordpress_id
      }
    }
  }
`
