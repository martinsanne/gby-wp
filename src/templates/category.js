import React from "react"
import { graphql } from "gatsby"
import BlogPage from "../components/BlogPage"
import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  const page = data.wordpressPage
  const { locale } = pageContext
  const posts = data.allWordpressPost.edges.map(item => item.node)

  return (
    <Layout
      locale={locale}
      translations={page.translations}
      options={data.wordpressHeyAcfoptions}
      settings={data.wordpressHeySettings}
    >
      <BlogPage posts={posts} page={page} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: [Int], $locale: String!) {
    wordpressPage(template: { eq: "blog" }, locale: { eq: $locale }) {
      title
      content
      link
    }

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

    allWordpressPost(
      limit: 40
      filter: { categories: { in: $id }, locale: { eq: $locale } }
    ) {
      edges {
        node {
          title
          link
          wordpress_id
          excerpt
          date
          featured_image {
            title
            filename
            filesize
            url
            link
            alt
            author
            description
            caption
            name
            status
            uploaded_to
            date
            modified
            menu_order
            mime_type
            type
            subtype
            icon
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
        }
      }
    }
  }
`

// wordpressHeyCategories(term_id: { eq: $id }) {
//   name
//   term_id
// }

// wordpressHeyCategories(term_id: { eq: $id }) {
//   name
// }

// allWordpressPost(filter: { categories: { in: $id } }) {
//   edges {
//     node {
//       title
//     }
//   }
// }
