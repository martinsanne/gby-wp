// import React, { useEffect, useState } from "react"
import React, { useEffect, useState } from "react"
import { acfImageToSrcset } from "../../utils/wpHelpers"
import cc from "classcat"
import { nanoid } from "nanoid"

const FeaturedImageAspect = props => {
  const { className, alt, title, width, height, url, maxWidth } = props
  const [srcset, setSrcset] = useState(
    acfImageToSrcset(props, maxWidth || 1024)
  )
  const [classNames, setClassNames] = useState({
    lazyload: true,
    aspect: true,
    [className]: className,
  })

  const calculateSrcset = () => {
    const newSrcset = acfImageToSrcset(props, maxWidth || 1024)
    setSrcset(newSrcset)
  }
  useEffect(calculateSrcset, [props])

  // Reset classnames if srcset changes to ensure lazyloading
  const resetClassnames = () => {
    setClassNames({
      lazyload: true,
      aspect: true,
      [className]: className,
    })
  }
  useEffect(resetClassnames, [srcset])

  return (
    <>
      <div
        key={nanoid()}
        aria-label={alt || title}
        data-bgset={srcset}
        role="img"
        className={cc(classNames)}
      />
      <noscript>
        <img
          className="aspect__fallback"
          src={url}
          width={width}
          height={height}
          alt={alt || title}
        />
      </noscript>
    </>
  )
}

export default FeaturedImageAspect
