import React from "react"
import HeadlinerArtists from "./HeadlinerArtists"
import Illustration from "./utils/Illustration"

const Hero = ({ hero }) => {
  return (
    <div className="Hero">
      <div className="container">
        <Illustration className="Hero__illustration" name="gulrot" />
        {hero?.headliners && (
          <HeadlinerArtists artists={hero.headliners} hero />
        )}
      </div>
    </div>
  )
}

export default Hero
