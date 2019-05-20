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
        }
      }
      artists {
        wordpress_id
        status
        title {
          rendered
        }
        acf {
          headliner
          greencopper_url
        }
      }
    }
  }
`
