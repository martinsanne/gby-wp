import React from "react"
import { graphql } from "gatsby"
import Section from "./Section"
import Artists from "./Artists"

export default ({ page }) => {
  const headliners = page.acf.artists.filter(artist => artist.acf.headliner)
  const artists = page.acf.artists.filter(artist => !artist.acf.headliner)

  return (
    <div>
      <p>FrontPage:</p>
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      <div className="container">
        {page.acf && page.acf.artists && (
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
