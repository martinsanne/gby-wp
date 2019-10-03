import React from "react"
import { SlideDown } from "react-slidedown"
import "react-slidedown/lib/slidedown.css"
import cc from "classcat"
import { FormattedMessage } from "react-intl"

import { Toggle } from "./utils"

const ArtistsToggle = ({ children }) => {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <div className="ArtistsToggle">
          <SlideDown>{on ? children : null}</SlideDown>

          <div
            className={cc({
              ArtistsToggle__toggle: true,
              "ArtistsToggle__toggle--is-open": on,
            })}
          >
            <button className="ArtistsToggle__button" onClick={toggle}>
              {on ? (
                <FormattedMessage
                  id="artists.hideButton"
                  defaultMessage="Se alle"
                />
              ) : (
                <FormattedMessage
                  id="artists.showButton"
                  defaultMessage="Se flere"
                />
              )}
            </button>
          </div>
        </div>
      )}
    </Toggle>
  )
}

export default ArtistsToggle
