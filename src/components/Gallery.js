import React from "react"
import { FeaturedImageAspect } from "./utils"
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
              <VimeoWrapper
                video={gallery.acf.video_header.video}
                autoplay
                loop
              />
            </Overlay>
          </div>
          <div className="Gallery__list">
            {gallery.acf.gallery &&
              gallery.acf.gallery.slice(0, 4).map(item => (
                <div
                  key={`GalleryItem-${item.video || item.image.wordpress_id}`}
                  className="Gallery__item"
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
        </>
      )}
    </div>
  )
}

export default Gallery
