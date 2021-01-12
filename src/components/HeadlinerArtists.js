import React, { useContext, useEffect, useRef, useState } from "react"
import addDivider from "../utils/addDivider"
import useWindowSize from "./hooks/useWindowSize"
import useTimeout from "./hooks/useTimeout"
import { Link } from "gatsby"
import { FeaturedImage, Overlay } from "./utils"
import cc from "classcat"
import { AppContext } from "./utils/AppContext"

const HeadlinerArtists = ({ artists }) => {
  const { actions } = useContext(AppContext)
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
      onMouseEnter={() => {
        actions.setArtistHover(true)
      }}
      onMouseLeave={() => {
        actions.setArtistHover(false)
      }}
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
              <div className="HeadlinerArtists__item">
                <div className="HeadlinerArtists__group">
                  <img
                    className="HeadlinerArtists__graphic"
                    src={artist?.acf?.name_graphic?.url}
                    alt={artist.title.rendered}
                    onMouseEnter={() => {
                      setCurrentArtist(artist)
                    }}
                    onMouseLeave={() => {
                      setCurrentArtist(null)
                    }}
                    role="presentation"
                  />
                  {artist.acf.country_code && (
                    <div className="HeadlinerArtists__country">
                      &nbsp;({artist.acf.country_code})
                    </div>
                  )}
                </div>
                <div className="HeadlinerArtists__divider">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="8" fill="black" />
                  </svg>
                </div>
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
