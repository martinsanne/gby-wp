import React, { useState } from "react"
import cc from "classcat"

import useInterval from "./hooks/useInterval"
import { Illustration } from "./utils"

const AnimatedIllustration = ({
  name = "random",
  duration = "10s",
  delay = "0s",
  className,
  children,
}) => {
  const [top, setTop] = useState(`${Math.floor(Math.random() * 100)}%`)

  useInterval(() => {
    setTop(`${Math.floor(Math.random() * 100)}%`)
  }, 10000)

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
          animation: `animated-${name} ${duration} ${delay} linear infinite both`,
          // top: top,
        }}
      />
      <div className="AnimatedIllustration__content">{children}</div>
    </div>
  )
}

export default AnimatedIllustration
