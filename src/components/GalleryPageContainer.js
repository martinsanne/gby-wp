import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GalleryPage from "./GalleryPage"

const GalleryPageContainer = ({ page }) => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpArtist {
        edges {
          node {
            title
            acf {
              country_code
              date(formatString: "YYYY")
            }
          }
        }
      }
      allWordpressWpGallery {
        edges {
          node {
            wordpress_id
            slug
            content
            acf {
              flickr_url
              video_header {
                video
              }
              gallery {
                image {
                  wordpress_id
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
      }
    }
  `)

  const galleries = data.allWordpressWpGallery.edges.map(item => item.node)
  const artists = data.allWordpressWpArtist.edges

  const galleriesMapped = galleries.map(gallery => {
    const galleryArtists = artists.filter(item => {
      return item.node.acf.date === gallery.slug
    })
    gallery.artists = galleryArtists.map(item => item.node)
    return gallery
  })

  return <GalleryPage {...page} galleries={galleriesMapped} />
}

export default GalleryPageContainer
