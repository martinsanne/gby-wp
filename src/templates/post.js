import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Post from "../components/Post"
import { SEOHeaders } from "../components/utils"

export default ({ data, pageContext, translations, ...rest }) => {
  const post = data.wordpressPost
  const posts = data.allWordpressPost.edges.map(item => item.node)
  const { locale } = pageContext
  return (
    <Layout
      translations={translations}
      locale={locale}
      options={data.wordpressHeyAcfoptions}
      settings={data.wordpressHeySettings}
    >
      <SEOHeaders data={post} />
      <Post post={post} posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!, $locale: String!) {
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

    allWordpressPost(limit: 10, filter: { locale: { eq: $locale } }) {
      edges {
        node {
          title
          wordpress_id
          link
          excerpt
          locale
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

    wordpressPost(id: { eq: $id }) {
      seo_head
      wordpress_id
      title
      excerpt
      content
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
