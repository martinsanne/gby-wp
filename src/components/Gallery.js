import React, { Component, Fragment, Suspense } from "react"
import { FeaturedImageAspect } from "./utils"

import Overlay from "./utils/Overlay"
import VimeoWrapper from "./utils/VimeoWrapper"

export default class Gallery extends Component {
  setWidth = width => {
    switch (width) {
      case "quarter":
        return "25%"
      case "half":
        return "50%"
      case "full":
        return "100%"
      default:
        return "100%"
    }
  }
  render() {
    const { gallery } = this.props
    return (
      <div className="Gallery lazyload">
        {gallery && gallery.acf.video_header && (
          <Fragment>
            <div className="Gallery__main">
              <Overlay hoverable>
                <Suspense fallback={<div />}>
                  <VimeoWrapper
                    video={gallery.acf.video_header.video}
                    autoplay
                    loop
                  />
                </Suspense>
              </Overlay>
            </div>
            <div className="Gallery__list">
              {gallery.acf.gallery &&
                gallery.acf.gallery.slice(0, 4).map(item => (
                  <div
                    key={`GalleryItem-${item.video || item.image.wordpress_id}`}
                    className="Gallery__item"
                    // style={{ width: this.setWidth(item.width) }}
                  >
                    <Overlay hoverable>
                      {item.video ? (
                        <VimeoWrapper video={item.video} loop />
                      ) : (
                        <FeaturedImageAspect
                          {...item.image}
                          className="aspect-sm--landscape"
                          maxWidth={1000}
                        />
                      )}
                    </Overlay>
                  </div>
                ))}
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}
