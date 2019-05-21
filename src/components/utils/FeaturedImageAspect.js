import React from "react"
import { acfImageToSrcset } from "../../utils/wpHelpers"
import cc from "classcat"

const FeaturedImageAspect = props => {
  const { className, alt, title, width, height, url } = props
  let { maxWidth } = props
  if (!maxWidth) {
    maxWidth = 1024
  }
  const srcset = acfImageToSrcset(props, maxWidth)

  return (
    <>
      <div
        key={srcset}
        aria-label={alt || title}
        data-bgset={srcset}
        role="img"
        className={cc({
          lazyload: true,
          aspect: true,
          [className]: className,
        })}
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
