import React from "react"

const FontToggle = ({ i, children }) => {
  // Every third is either pixel of serif font
  const className =
    (i + 1) % 3 === 0 ? ((i + 1) % 6 === 0 ? "f-pixel" : "f-serif") : ""
  return <span className={className}>{children}</span>
}

export default FontToggle
