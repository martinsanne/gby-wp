import React from "react"
import cc from "classcat"

import { isBrowser } from "../utils/helpers"
import { FeaturedImageAspect, Illustration } from "./utils"
import Overlay from "./utils/Overlay"
import VimeoWrapper from "./utils/VimeoWrapper"

const Gallery = props => {
  const { gallery } = props
  return (
    <div className="Gallery lazyload">
      {gallery && gallery.acf.video_header && (
        <>
          <div className="Gallery__main">
            <Overlay hoverable>
              {gallery.acf.video_header.video && (
                <VimeoWrapper
                  video={gallery.acf.video_header.video}
                  autoplay
                  loop
                />
              )}
              {gallery.acf.video_header.image && (
                <FeaturedImageAspect
                  {...gallery.acf.video_header.image}
                  className="aspect-sm--square"
                  maxWidth={1000}
                />
              )}
            </Overlay>
          </div>
          <div className="Gallery__list">
            {gallery.acf.gallery &&
              gallery.acf.gallery.slice(0, 4).map(item => {
                return (
                  <div
                    key={`GalleryItem-${item.video || item.image.wordpress_id}`}
                    className="Gallery__item"
                  >
                    {isBrowser && Math.random() < 0.35 && (
                      <Illustration
                        className={cc({
                          Gallery__illustration: true,
                          "Gallery__illustration--right": Math.random() > 0.25,
                        })}
                        name="random"
                      />
                    )}
                    <Overlay hoverable>
                      {item.video ? (
                        <VimeoWrapper video={item.video} loop />
                      ) : (
                        <FeaturedImageAspect
                          {...item.image}
                          className="aspect-sm--square"
                          maxWidth={1000}
                        />
                      )}
                    </Overlay>
                  </div>
                )
              })}
          </div>
        </>
      )}
    </div>
  )
}

export default Gallery
