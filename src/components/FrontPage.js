import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Section from "./Section"
import Artists from "./Artists"
import Hero7 from "./Hero7"
import ArtistsToggle from "./ArtistsToggle"
import NewsCard from "./NewsCard"
import FestivalInfoMarquee from "./FestivalInfoMarquee"
import Fact from "./Fact"
import Gallery from "./Gallery"

export default props => {
  const { page } = props
  const acf = page.acf
  const headliners = acf.artists.filter(artist => artist.acf.headliner)
  const artists = acf.artists.filter(artist => !artist.acf.headliner)
  // const { posts, gallery, acf, title } = page
  const posts = props.latestPosts.slice(0, 6)
  return (
    <div>
      {acf.hero.headliners && acf.hero.headliners.length > 0 && (
        <Hero7 hero={acf.hero} />
      )}
      <div className="container">
        {acf.artists && (
          <Section>
            <ArtistsToggle>
              <>
                {headliners && headliners.length > 0 && (
                  <Artists artists={headliners} />
                )}
                {artists && artists.length > 0 && <Artists artists={artists} />}
              </>
            </ArtistsToggle>
          </Section>
        )}
      </div>
      <div className="container">
        {posts && acf && acf.news && (
          <Section
            title={acf.news.title || ""}
            desc={acf.news.description || ""}
          >
            <div className="NewsCards NewsCards--frontpage">
              {posts.map((post, i) => (
                <NewsCard
                  key={`NewsCard-${post.wordpress_id}`}
                  post={post}
                  i={i}
                />
              ))}
            </div>
            <div className="Section__action">
              {acf.news.link && (
                <Link className="button" to={acf.news.link.url}>
                  {acf.news.link.title}
                </Link>
              )}
            </div>
          </Section>
        )}
      </div>
      <Section>
        <FestivalInfoMarquee />
      </Section>
      <div className="container">
        {acf.did_you_know && (
          <Section>
            <Fact data={acf.did_you_know} />
          </Section>
        )}

        {acf && acf.gallery && (
          <StaticQuery
            query={galleryQuery}
            render={data => {
              const gallery = data.wordpressWpGallery
              return (
                <Section
                  title={acf.gallery.title || ""}
                  desc={acf.gallery.description || ""}
                >
                  {acf.gallery.link && (
                    <Link to={acf.gallery.link.url}>
                      <Gallery gallery={gallery} />
                    </Link>
                  )}
                  <div className="Section__action">
                    {acf.gallery.link && (
                      <Link className="button" to={acf.gallery.link.url}>
                        {acf.gallery.link.title}
                      </Link>
                    )}
                  </div>
                </Section>
              )
            }}
          />
        )}

        {/* {acf && acf.gallery && (
          <Section
            title={acf.gallery.title || ""}
            desc={acf.gallery.description || ""}
          >
            {acf.gallery.link && (
              <Link to={acf.gallery.link.url}>
                <Gallery gallery={gallery} />
              </Link>
            )}
            <div className="Section__action">
              {acf.gallery.link && (
                <Link className="button" to={acf.gallery.link.url}>
                  {acf.gallery.link.title}
                </Link>
              )}
            </div>
          </Section>
        )} */}
      </div>
    </div>
  )
}

const galleryQuery = graphql`
  query {
    wordpressWpGallery(slug: { eq: "2018" }) {
      title
      content
      link
      slug
      acf {
        flickr_url
        video_header {
          video
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
          video
          width
        }
      }
    }
  }
`

export const query = graphql`
  fragment AcfFrontPageArtists on wordpress__PAGE {
    acf {
      gallery {
        title
        description
        link {
          url
          title
        }
      }
      news {
        title
        description
        link {
          title
          url
          target
        }
      }
      hero {
        headliners {
          wordpress_id
          status
          title {
            rendered
          }
          acf {
            country_code
            greencopper_url
            headliner
          }
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
        }
      }
      artists {
        wordpress_id
        status
        title {
          rendered
        }
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
        acf {
          country_code
          greencopper_url
          headliner
        }
      }
    }
  }
`
