import React, { useEffect, useRef, useState } from "react"
import addDivider from "../utils/addDivider"
import useWindowSize from "./hooks/useWindowSize"
import useTimeout from "./hooks/useTimeout"
import { Link } from "gatsby"
import { FeaturedImage, Overlay } from "./utils"
import cc from "classcat"

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
    <div
      className={cc({
        HeadlinerArtists: true,
        "HeadlinerArtists--launch": artists.length <= 2,
      })}
      ref={wrapper}
    >
      {artists.map(
        (artist, i) =>
          artist?.acf?.name_graphic?.url && (
            <Link
              key={`HeadlinerArtistsItem-${artist.wordpress_id || artist.id}`}
              className="HeadlinerArtists__link"
              to={`${artist?.acf?.greencopper_url[0] !== "/" ? "/" : ""}${
                artist?.acf?.greencopper_url
              }`}
            >
              {console.log(artist)}
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
      {currentArtist && currentArtist.featured_image && (
        <Overlay className="HeadlinerArtists__image">
          <FeaturedImage {...currentArtist.featured_image} />
        </Overlay>
      )}
    </div>
  )
}

export default HeadlinerArtists
