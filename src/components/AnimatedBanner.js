import React from "react"
import VisibilitySensor from "react-visibility-sensor"
import cc from "classcat"
import { Illustration } from "./utils"

const AnimatedBanner = ({ illustration, text, reverse = false }) => {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <div
          className={cc({
            AnimatedBanner: true,
            "AnimatedBanner--pause": !isVisible,
            "AnimatedBanner--reverse": reverse,
          })}
        >
          <div className="AnimatedBanner__wrapper">
            <Illustration
              src={illustration}
              className="AnimatedBanner__illustration"
            />
            {text && (
              <div className="AnimatedBanner__banner">
                <h2>{text}</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </VisibilitySensor>
  )
}

export default AnimatedBanner
