import React, { Component, createRef } from "react"
import keygen from "uuid/v1"
import VisibilitySensor from "react-visibility-sensor"
import cc from "classcat"

export default class Marquee extends Component {
  list = createRef()
  container = createRef()

  state = {
    id: null,
  }

  componentDidMount = () => {
    this.setState({ id: keygen() }, () => this.handleAnimation())
    window.addEventListener("resize", this.handleAnimation)
  }

  handleAnimation = () => {
    if (this.style) {
      document.getElementsByTagName("head")[0].removeChild(this.style)
    }

    if (this.container.current) {
      const containerWidth = this.container.current.getBoundingClientRect()
        .width
      const width = this.list.current.scrollWidth

      const duration = width <= containerWidth ? "0s" : `${(width / 200) * 2}s`

      const keyframes = `
      @-webkit-keyframes marquee-${this.state.id} {
        from {
          -webkit-transform: translateX(0) translateZ(0);
        }
        to {
          -webkit-transform: translateX(${-width +
            containerWidth}px) translateZ(0);
        }
      }

      @keyframes marquee-${this.state.id} {
        from {
          transform: translateX(0) translateZ(0);
        }
        to {
          transform: translateX(${-width + containerWidth}px) translateZ(0);
        }
      }
    `
      this.style = document.createElement("style")
      this.style.type = "text/css"
      this.style.innerHTML = keyframes
      document.getElementsByTagName("head")[0].appendChild(this.style)

      this.list.current.style.setProperty(
        "animation",
        `marquee-${this.state.id} ${duration} linear infinite alternate`
      )
    }
  }

  componentWillUnmount = () => {
    document.getElementsByTagName("head")[0].removeChild(this.style)
    window.removeEventListener("resize", this.handleAnimation)
  }

  render() {
    const { data, className } = this.props
    return (
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div
            className={cc({
              Marquee: true,
              "Marquee--is-paused": !isVisible,
              [className]: className,
            })}
            ref={this.container}
          >
            <div className="Marquee__list" ref={this.list}>
              <p>{data}</p>
            </div>
          </div>
        )}
      </VisibilitySensor>
    )
  }
}
