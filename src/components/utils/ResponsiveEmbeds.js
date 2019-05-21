import React, { Component, createRef } from "react"

export default class ResponsiveEmbeds extends Component {
  container = createRef()
  componentDidMount = () => {
    this.makeEmbedsResponsive()
  }

  makeEmbedsResponsive = () => {
    const embeds = [
      ...this.container.current.querySelectorAll(".WPEditor__embed"),
    ]

    if (embeds) {
      embeds.map(embed => this.makeEmbedResponsive(embed))
    }
  }

  makeEmbedResponsive = el => {
    if (el && el.classList) {
      el.classList.add("embed")
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

  render() {
    return <div ref={this.container}>{this.props.children}</div>
  }
}
