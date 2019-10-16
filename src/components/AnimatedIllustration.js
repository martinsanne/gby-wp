import React, { useState } from "react"
import cc from "classcat"

import useInterval from "./hooks/useInterval"
import { Illustration } from "./utils"
import { randomIntFromRange } from "./Hero2019"

const AnimatedIllustration = ({
  name = "random",
  duration = "10s",
  className,
  children,
}) => {
  const [top, setTop] = useState(`${Math.floor(Math.random() * 100)}%`)

  useInterval(() => {
    setTop(`${Math.floor(Math.random() * 100)}%`)
  }, 10000)

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
        name={name}
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
