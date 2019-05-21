import React from "react"
import { graphql } from "gatsby"
import Section from "./Section"
import Artists from "./Artists"
import Hero7 from "./Hero7"

export default ({ page }) => {
  const acf = page.acf
  const headliners = acf.artists.filter(artist => artist.acf.headliner)
  const artists = acf.artists.filter(artist => !artist.acf.headliner)
  return (
    <div>
      {acf.hero.headliners && acf.hero.headliners.length > 0 && (
        <Hero7 hero={acf.hero} />
      )}
      <div className="container">
        {acf.artists && (
          <Section>
            {headliners && headliners.length > 0 && (
              <Artists artists={headliners} expandable />
            )}
            {artists && artists.length > 0 && (
              <Artists artists={artists} expandable />
            )}
          </Section>
        )}
      </div>
      <pre>{JSON.stringify(page, null, 2)}</pre>
    </div>
  )
}

export const query = graphql`
  fragment AcfFrontPageArtists on wordpress__PAGE {
    acf {
      hero {
        headliners {
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
          headliner
          greencopper_url
        }
      }
    }
  }
`
