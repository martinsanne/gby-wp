import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Grid from "styled-components-grid"

import Section from "./Section"
import Artists from "./Artists"
import Hero from "./Hero"
import ArtistsToggle from "./ArtistsToggle"
import NewsCard from "./NewsCard"
import Gallery from "./Gallery"
// import AnimatedBanner from "./AnimatedBanner"
import AnimatedIllustration from "./AnimatedIllustration"
import Fact from "./Fact"
import AsyncArtistLoader from "./AsyncArtistLoader"
import Logo from "./Logo"
import SocialBox from "./SocialBox"

export default props => {
  const { page } = props
  const acf = page.acf
  const posts = props.latestPosts.slice(0, 6)
  return (
    <div>
      <AsyncArtistLoader pageId={page.wordpress_id}>
        {({ asyncArtists, asyncHero }) => {
          let headliners = [],
            artists = [],
            hero,
            allArtists = []

          if (asyncArtists && asyncHero) {
            allArtists = asyncArtists
            hero = asyncHero
            headliners = allArtists.filter(artist => artist.acf.headliner)
            artists = allArtists.filter(artist => !artist.acf.headliner)
          } else {
            if (acf.artists && acf.artists.length) {
              allArtists = acf.artists
              headliners = acf.artists.filter(artist => artist.acf.headliner)
              artists = acf.artists.filter(artist => !artist.acf.headliner)
            }
            if (acf.hero) {
              hero = acf.hero
            }
          }

          return (
            <>
              {allArtists.length <= 0 && hero?.headliners?.length <= 0 && (
                <div className="Hero__logo">
                  <Logo />
                </div>
              )}
              {hero?.headliners?.length > 0 && <Hero hero={hero} />}
              {allArtists && allArtists.length > 0 && (
                <ArtistsToggle>
                  <div className="container">
                    <div className="Artists__layout">
                      {headliners && headliners.length > 0 && (
                        <Artists artists={headliners} headliners />
                      )}
                      {artists && artists.length > 0 && (
                        <Artists artists={artists} />
                      )}
                    </div>
                  </div>
                </ArtistsToggle>
              )}
            </>
          )
        }}
      </AsyncArtistLoader>
      {/* <FormattedMessage
        id="global.dateAndPlace"
        defaultMessage="10—14 August 2021, Oslo, Norway"
      >
        {string => (
          <AnimatedBanner
            illustration="illustrations/snail2.png"
            text={string}
          />
        )}
      </FormattedMessage> */}

      {posts && acf && acf.news && (
        <AnimatedIllustration
          name="snegle"
          src="illustrations/snail2.png"
          reverse
        >
          <Section
            // title={acf.news.title || ""}
            desc={acf.news.description || ""}
          >
            <div className="container">
              <Grid className="Grid NewsCards NewsCards--frontpage">
                <Grid.Unit
                  className="Grid__item"
                  size={{ sm: 1 / 2, lg: 1 / 3 }}
                >
                  <SocialBox />
                </Grid.Unit>
                {posts.map((post, i) => (
                  <Grid.Unit
                    className="Grid__item"
                    size={{ sm: 1 / 2, lg: 1 / 3 }}
                    key={`NewsCard-${post.wordpress_id}`}
                  >
                    <NewsCard post={post} i={i} />
                  </Grid.Unit>
                ))}
              </Grid>
              <div className="Section__action">
                {acf.news.link && (
                  <Link className="button" to={acf.news.link.url}>
                    {acf.news.link.title}
                  </Link>
                )}
              </div>
            </div>
          </Section>
        </AnimatedIllustration>
      )}

      {acf.did_you_know && acf.did_you_know.first_paragraph && (
        <Section>
          <div className="container">
            <Fact data={acf.did_you_know} />
          </div>
        </Section>
      )}

      {acf && acf.gallery && (
        <StaticQuery
          query={galleryQuery}
          render={data => {
            const gallery = data.wordpressWpGallery
            return (
              <AnimatedIllustration
                name="bie"
                src="illustrations/bee-left.png"
                reverse
              >
                <div className="container">
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
                </div>
              </AnimatedIllustration>
            )
          }}
        />
      )}
    </div>
  )
}

const galleryQuery = graphql`
  query {
    wordpressWpGallery(slug: { eq: "2019" }) {
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
        # tagline
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
            name_graphic {
              url
              alt
            }
          }
          # featured_image {
          #   wordpress_id
          #   title
          #   url
          #   alt
          #   description
          #   caption
          #   name
          #   mime_type
          #   subtype
          #   width
          #   height
          #   sizes {
          #     thumbnail
          #     thumbnail_width
          #     thumbnail_height
          #     medium
          #     medium_width
          #     medium_height
          #     medium_large
          #     medium_large_width
          #     medium_large_height
          #     large
          #     large_width
          #     large_height
          #     small
          #     small_width
          #     small_height
          #     medium_small
          #     medium_small_width
          #     medium_small_height
          #     xlarge
          #     xlarge_width
          #     xlarge_height
          #   }
          # }
        }
      }
      # artists {
      #   wordpress_id
      #   status
      #   title {
      #     rendered
      #   }
      #   featured_image {
      #     wordpress_id
      #     title
      #     url
      #     alt
      #     description
      #     caption
      #     name
      #     mime_type
      #     subtype
      #     width
      #     height
      #     sizes {
      #       thumbnail
      #       thumbnail_width
      #       thumbnail_height
      #       medium
      #       medium_width
      #       medium_height
      #       medium_large
      #       medium_large_width
      #       medium_large_height
      #       large
      #       large_width
      #       large_height
      #       small
      #       small_width
      #       small_height
      #       medium_small
      #       medium_small_width
      #       medium_small_height
      #       xlarge
      #       xlarge_width
      #       xlarge_height
      #     }
      #   }
      #   acf {
      #     country_code
      #     greencopper_url
      #     headliner
      #   }
      # }
    }
  }
`
