import React, { Component } from "react"
import cc from "classcat"
import { emptyGif } from "../../utils/lazysizes"
import Html from "./Html"
import { acfImageToSrcset } from "../../utils/wpHelpers"

export default class FeaturedImage extends Component {
  render() {
    const {
      width,
      height,
      showCaption,
      description,
      caption,
      maxWidth,
      className,
      url,
      alt,
      title,
    } = this.props
    const aspect = height / width
    const srcset = this.props.url
      ? this.props.url
      : acfImageToSrcset(this.props, maxWidth)

    if (!srcset) {
      console.warn("Could not generate srcset.")
      return null
    }

    return (
      <figure
        className={cc({
          [className]: className,
        })}
      >
        <img
          key={srcset}
          ref={this.image}
          data-sizes="auto"
          width={width}
          height={height}
          data-aspectratio={aspect}
          className={cc({
            FeaturedImage: true,
            lazyload: true,
          })}
          data-srcset={srcset}
          src={emptyGif}
          alt={alt || title}
        />
        {/** Add Google image search friendlyness */}
        <noscript>
          <img
            className="aspect__fallback"
            src={url}
            width={width}
            height={height}
            alt={alt || title}
          />
        </noscript>
        {showCaption && (description || caption) && (
          <figcaption className="FeaturedImage__caption">
            <Html content={description || caption} />
          </figcaption>
        )}
      </figure>
    )
  }
}
