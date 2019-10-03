import React from "react"

import useMouse from "../hooks/useMouse"
import FeaturedImage from "./FeaturedImage"

const ImageOnMousePosition = ({ image }) => {
  const mouse = useMouse()
  return (
    <div
      style={{
        position: "absolute",
        top: `${mouse.clientY}px`,
        left: `${mouse.clientX}px`,
        background: "red",
      }}
    >
      HEEELo
      <FeaturedImage {...image} />
      <pre>
        {JSON.stringify(
          {
            top: `${mouse.clientY}px`,
            left: `${mouse.clientX}px`,
          },
          null,
          2
        )}
      </pre>
      <pre>{JSON.stringify(mouse, null, 2)}</pre>
    </div>
  )
}

export default ImageOnMousePosition
