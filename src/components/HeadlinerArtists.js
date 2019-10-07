import React, { useEffect, useRef, useState } from "react"
import addDivider from "../utils/addDivider"
import useWindowSize from "./hooks/useWindowSize"
import useTimeout from "./hooks/useTimeout"
import { Link } from "gatsby"
import { FeaturedImage } from "./utils"

const HeadlinerArtists = ({ artists }) => {
  const wrapper = useRef()
  const windowSize = useWindowSize({ debounce: 200 })
  const [currentArtist, setCurrentArtist] = useState(null)

  // Need time out for first render
  useTimeout(() => {
    const items = [
      ...wrapper.current.querySelectorAll(".HeadlinerArtists__item"),
    ]
    if (items) {
      addDivider(items, "HeadlinerArtists")
    }
  }, 400)

  useEffect(() => {
    const items = [
      ...wrapper.current.querySelectorAll(".HeadlinerArtists__item"),
    ]
    if (items) {
      addDivider(items, "HeadlinerArtists")
    }
  }, [windowSize])

  return (
    <div className="HeadlinerArtists" ref={wrapper}>
      {artists.map(
        (artist, i) =>
          artist?.acf?.name_graphic?.url && (
            <Link
              key={artist.wordpress_id}
              className="HeadlinerArtists__link"
              to={`${artist?.acf?.greencopper_url[0] !== "/" ? "/" : ""}${
                artist?.acf?.greencopper_url
              }`}
            >
              <div className="HeadlinerArtists__item">
                <span className="HeadlinerArtists__group">
                  <img
                    className="HeadlinerArtists__graphic"
                    src={artist?.acf?.name_graphic?.url}
                    alt={artist.title.rendered}
                    onMouseEnter={() => setCurrentArtist(artist)}
                    onMouseLeave={() => setCurrentArtist(null)}
                  />
                  {artist.acf.country_code && (
                    <span className="HeadlinerArtists__country">
                      &nbsp;({artist.acf.country_code})
                    </span>
                  )}
                </span>
                <span className="HeadlinerArtists__divider">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="8" fill="black" />
                  </svg>
                </span>
              </div>
            </Link>
          )
      )}
      {currentArtist && (
        <FeaturedImage
          className="HeadlinerArtists__image"
          {...currentArtist.featured_image}
        />
      )}
    </div>
  )
}

export default HeadlinerArtists
