import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"

import addDivider from "../utils/addDivider"
import useTimeout from "./hooks/useTimeout"
import useWindowSize from "./hooks/useWindowSize"

import { Html, Mouse, Overlay } from "./utils"
import FontToggle from "./utils/FontToggle"

const Artists = ({ artists }) => {
  const wrapper = useRef()
  const windowSize = useWindowSize({ debounce: 400 })
  const [currentArtist, setCurrentArtist] = useState(null)

  // Need time out for first render
  useTimeout(() => {
    const items = [...wrapper.current.querySelectorAll(".Artists__item")]
    if (items) {
      addDivider(items, "Artists")
    }
  }, 400)

  useEffect(() => {
    const items = [...wrapper.current.querySelectorAll(".Artists__item")]
    if (items) {
      addDivider(items, "Artists")
    }
  }, [windowSize])
  return (
    <div className="Artists" ref={wrapper}>
      {artists?.map((artist, i) => (
        <Link
          key={artist.wordpress_id}
          className="Artists__link"
          to={`${artist?.acf?.greencopper_url[0] !== "/" ? "/" : ""}${
            artist?.acf?.greencopper_url
          }`}
        >
          <h2 className="Artists__item">
            <span
              className="Artists__group"
              onMouseEnter={() => {
                setCurrentArtist(artist)
              }}
              onMouseLeave={() => setCurrentArtist(null)}
            >
              <FontToggle i={i}>
                <span className="Artists__name">
                  <Html content={artist?.title?.rendered} />
                </span>
              </FontToggle>
              {artist?.acf?.country_code && (
                <small className="Artists__country">
                  &nbsp;({artist?.acf?.country_code})
                </small>
              )}
            </span>
            <span className="Artists__divider">·</span>
          </h2>
        </Link>
      ))}
      <Mouse>
        {({ x, y }) =>
          currentArtist &&
          currentArtist.featured_image &&
          x &&
          y && (
            <div
              className="Artists__overlay-image"
              style={{
                top: `${y}px`,
                left: `${x}px`,
              }}
            >
              <Overlay>
                <img
                  src={currentArtist.featured_image.sizes.thumbnail}
                  alt={currentArtist.title.rendered}
                />
              </Overlay>
            </div>
          )
        }
      </Mouse>
    </div>
  )
}

export default Artists
