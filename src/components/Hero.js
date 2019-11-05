import React from "react"
import HeadlinerArtists from "./HeadlinerArtists"
import Illustration from "./utils/Illustration"

const Hero = ({ hero }) => {
  return (
    <div className="Hero">
      <div className="Hero__container container">
        {hero.headliners && hero.headliners.length > 2 && (
          <Illustration className="Hero__illustration" name="gulrot" />
        )}
        {hero?.headliners && (
          <HeadlinerArtists artists={hero.headliners} hero />
        )}
        {hero.headliners && hero.headliners.length <= 2 && (
          <p className="Hero__payoff">
            Årets første artistslipp. Følg med for flere slipp snart!
          </p>
        )}
      </div>
    </div>
  )
}

export default Hero
