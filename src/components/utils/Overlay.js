import React from "react"
import cc from "classcat"

const Overlay = ({ className, children, hoverable, style }) => {
  return (
    <div
      style={style}
      className={cc({
        Overlay: true,
        "Overlay--hoverable": hoverable,
        [className]: className,
      })}
    >
      {children}
    </div>
  )
}

export default Overlay
