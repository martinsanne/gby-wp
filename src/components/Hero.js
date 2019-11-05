import React from "react"
import HeadlinerArtists from "./HeadlinerArtists"
import Illustration from "./utils/Illustration"

const Hero = ({ hero }) => {
  return (
    <div className="Hero">
      <div className="Hero__container container">
        <div className="Hero__content">
          {hero.headliners && hero.headliners.length <= 2 && (
            <Illustration
              className="Hero__rocket"
              src="illustrations/rocket-left-speed.png"
            />
          )}
          {hero.headliners && hero.headliners.length > 2 && (
            <Illustration
              className="Hero__illustration"
              src="illustrations/carrot.png"
            />
          )}
          {hero?.headliners && (
            <HeadlinerArtists artists={hero.headliners} hero />
          )}
          {hero.headliners && hero.headliners.length <= 2 && (
            <>
              <Illustration
                className="Hero__hand"
                src="graphics/hero-shrooms.png"
              />
            </>
          )}
        </div>
        {hero.tagline && <p className="Hero__payoff">{hero.tagline}</p>}
      </div>
    </div>
  )
}

export default Hero
