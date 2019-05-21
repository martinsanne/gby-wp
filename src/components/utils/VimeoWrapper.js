import React, { Component, createRef } from "react"
import Vimeo from "@u-wave/react-vimeo"
import cc from "classcat"
import VisibilitySensor from "react-visibility-sensor"
import PageVisibilitySensor from "./PageVisibilitySensor"

export default class VimeoWrapper extends Component {
  video = createRef()
  wrapper = createRef()
  state = {
    loaded: true,
  }

  makeEmbedsResponsive = () => {
    const el = this.video.current.container
    if (el) {
      let iframe = el.getElementsByTagName("iframe")
      if (iframe) {
        iframe = iframe[0]
        const w = parseFloat(iframe.getAttribute("width"))
        const h = parseFloat(iframe.getAttribute("height"))
        if (h && w) {
          const pusher = document.createElement("div")
          pusher.className = "embed__pusher"
          pusher.style.paddingTop = (h / w) * 100 + "%"
          el.appendChild(pusher)
        }
      }
    }
  }
  handleLoad = () => {
    this.makeEmbedsResponsive()
  }
  render() {
    const { video, className, loop, autoplay } = this.props
    const { loaded } = this.state
    return (
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <PageVisibilitySensor>
            {({ isPageVisible }) => (
              <div
                ref={this.wrapper}
                className={cc({
                  VimeoWrapper: true,
                  "VimeoWrapper--hidden": !loaded,
                })}
              >
                <Vimeo
                  ref={this.video}
                  video={video}
                  width="100%"
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
                  onLoaded={this.handleLoad}
                  onPlay={() =>
                    this.setState({
                      loaded: true,
                    })
                  }
                />
                {this.props.children}
              </div>
            )}
          </PageVisibilitySensor>
        )}
      </VisibilitySensor>
    )
  }
}
