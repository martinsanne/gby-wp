import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Post from "../components/Post"

export const pageQuery = graphql`
  query($id: String!) {
    allWordpressPost(limit: 10, filter: { locale: { eq: "nb" } }) {
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

export default ({ data, pageContext, translations, ...rest }) => {
  const post = data.wordpressPost
  const posts = data.allWordpressPost.edges.map(item => item.node)
  const { locale } = pageContext
  return (
    <Layout translations={translations} locale={locale}>
      <Post post={post} posts={posts} />
      {/* <div>
        <p>Post:</p>
        {post.wordpress_id} - {locale}
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <h3>date: {post.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div> */}
    </Layout>
  )
}
