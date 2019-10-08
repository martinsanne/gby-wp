import React, { createRef, useState, useEffect } from "react"
import Vimeo from "@u-wave/react-vimeo"
import cc from "classcat"
import VisibilitySensor from "react-visibility-sensor"
import PageVisibilitySensor from "./PageVisibilitySensor"
import useWindowSize from "../hooks/useWindowSize"

const VimeoWrapper = ({ video, className, loop, autoplay, children }) => {
  const embed = createRef()
  const wrapper = createRef()

  const [loaded, setLoaded] = useState(false)
  const [origVideoSize, setOrigVideoSize] = useState(null)
  const windowSize = useWindowSize({ debounce: 250 })
  const [newVideoSize, setNewVideoSize] = useState({ width: 0, height: 0 })

  const makeEmbedsResponsive = () => {
    const el = embed.current.container
    if (el) {
      let iframe = el.getElementsByTagName("iframe")
      if (iframe) {
        iframe = iframe[0]
        const w = parseFloat(iframe.getAttribute("width"))
        const h = parseFloat(iframe.getAttribute("height"))
        if (h && w) {
          // const pusher = document.createElement("div")
          // pusher.className = "embed__pusher"
          // pusher.style.paddingTop = (h / w) * 100 + "%"
          // el.appendChild(pusher)
          setOrigVideoSize({ width: w, height: h, ratio: w / h })
        }
      }
    }
  }

  const handleResize = () => {
    if (origVideoSize && wrapper.current) {
      setNewVideoSize({
        height: wrapper.current.getBoundingClientRect().height,
        width:
          wrapper.current.getBoundingClientRect().height * origVideoSize.ratio,
      })
      console.log(wrapper.current.getBoundingClientRect().height)
    }
  }

  useEffect(handleResize, [windowSize, origVideoSize])

  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <PageVisibilitySensor>
          {({ isPageVisible }) => (
            <div
              ref={wrapper}
              className={cc({
                VimeoWrapper: true,
                "VimeoWrapper--hidden": !loaded,
              })}
            >
              <Vimeo
                ref={embed}
                width={newVideoSize.width}
                height={newVideoSize.height}
                video={video}
                responsive={false}
                className={cc({
                  embed: true,
                  [className]: className,
                })}
                paused={!isVisible || !isPageVisible}
                loop={loop}
                showTitle={false}
                showByline={false}
                showPortrait={false}
                background={autoplay}
                onLoaded={makeEmbedsResponsive}
                onPlay={() => setLoaded(true)}
              />
              {children}
            </div>
          )}
        </PageVisibilitySensor>
      )}
    </VisibilitySensor>
  )
}

export default VimeoWrapper
