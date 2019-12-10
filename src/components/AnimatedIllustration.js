import React, { useState, useEffect } from "react"
import cc from "classcat"

import { Illustration } from "./utils"
import { randomIntFromRange } from "./Hero2019"

const AnimatedIllustration = ({
  src,
  name = "random",
  duration = "10s",
  className,
  children,
}) => {
  const [top, setTop] = useState(`${Math.floor(Math.random() * 100)}%`)

  useEffect(() => {
    setTop(`${Math.floor(Math.random() * 100)}%`)
  }, [])

  if (typeof window === "undefined") return children

  const delay = `${randomIntFromRange(0, 5)}s`

  return (
    <div
      className={cc({
        AnimatedIllustration: true,
        [className]: AnimatedIllustration,
      })}
    >
      <Illustration
        src={src}
        className="AnimatedIllustration__illustration"
        style={{
          animationName: `animated-${name}`,
          animationDuration: duration,
          animationDelay: delay,
          top: top,
        }}
      />
      <div className="AnimatedIllustration__content">{children}</div>
    </div>
  )
}

export default AnimatedIllustration
