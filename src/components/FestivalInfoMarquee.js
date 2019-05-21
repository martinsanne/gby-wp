import React, { Component } from "react"
import { MarqueeString } from "./utils"

const string = "6.-10. august, Tøyenparken, Oslo · "

export default class FestivalInfoMarquee extends Component {
  render() {
    const { className } = this.props
    return <MarqueeString className={className} data={string.repeat(10)} />
  }
}
