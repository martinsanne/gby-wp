import React from "react"
import Parser from "html-react-parser"

import { Html, Section, MarqueeString } from "./utils"
import Gallery from "./Gallery"
import { FormattedMessage } from "react-intl"

const GalleryPage = props => {
  const convertToMarqueeString = (artists, divider = " · ") => {
    return artists
      .map(
        artist =>
          `${Parser(artist.title)}${
            artist.acf.country_code ? ` (${artist.acf.country_code})` : ""
          }`
      )
      .join(divider)
  }

  const { galleries, title } = props
  return (
    <div className="GalleryPage Page">
      {title && (
        <header className="Page__header Section">
          <h1 className="Page__title">
            <Html content={title} />
          </h1>
        </header>
      )}
      {galleries &&
        galleries.map(gallery => (
          <Section
            key={`GalleryPage-${gallery.wordpress_id}`}
            title={gallery.slug}
            desc={gallery.content}
          >
            <a
              href={gallery.acf.flickr_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Gallery gallery={gallery} />
              {/* <pre>{JSON.stringify(gallery.artists, null, 2)}</pre> */}
              <MarqueeString
                data={convertToMarqueeString(
                  gallery.artists,
                  ` · ${gallery.slug} · `
                )}
              />
            </a>
            <div className="Section__action">
              <a
                href={gallery.acf.flickr_url}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <FormattedMessage
                  id="gallery.flicker"
                  defaultMessage={`"See all images from "{year}" on flicker"`}
                  values={{ year: gallery.slug }}
                />
              </a>
            </div>
          </Section>
        ))}
    </div>
  )
}

export default GalleryPage
