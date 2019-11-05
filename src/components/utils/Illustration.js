import React from "react"
import StaticImage from "../StaticImage"
import cc from "classcat"

export default function Illustration({ src, className, ...props }) {
  return (
    <div
      className={cc({ Illustration: true, [className]: className })}
      {...props}
    >
      <StaticImage src={src} alt="" />
    </div>
  )
}
