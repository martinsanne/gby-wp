import React from "react"

const FontToggle = ({ i, children, className }) => {
  // Every third is either pixel of serif font
  const fontClass =
    (i + 1) % 3 === 0 ? ((i + 1) % 6 === 0 ? "f-pixel" : "f-serif") : ""
  return (
    <span className={`${fontClass} ${className && className}`}>{children}</span>
  )
}

export default FontToggle
