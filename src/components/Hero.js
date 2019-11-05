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
                src="illustrations/hero-shrooms.png"
              />
            </>
          )}
        </div>
        <p className="Hero__payoff">
          Årets første artistslipp. Følg med for flere slipp snart!
        </p>
      </div>
    </div>
  )
}

export default Hero
