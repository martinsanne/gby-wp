import React, { Component, createRef } from "react"
import cc from "classcat"

import { getRandomColor } from "../../utils/colors"

export default class Overlay extends Component {
  overlay = createRef()
  componentDidMount = () => {
    this.overlay.current.style.setProperty(
      "--overlay",
      getRandomColor(this.props.i)
    )
  }

  render() {
    const { className, children, hoverable } = this.props
    return (
      <div
        className={cc({
          Overlay: true,
          "Overlay--hoverable": hoverable,
          [className]: className,
        })}
        ref={this.overlay}
      >
        {children}
      </div>
    )
  }
}
