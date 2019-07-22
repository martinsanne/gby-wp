import React, { Component } from "react"
import { FormattedMessage } from "react-intl"
import { MarqueeString } from "./utils"

export default class FestivalInfoMarquee extends Component {
  render() {
    const { className } = this.props
    return (
      <FormattedMessage
        id="global.dateAndPlace"
        defaultMessage="6.–10. august, Tøyenparken, Oslo"
      >
        {string => {
          string = string + " • "
          return (
            <MarqueeString className={className} data={string.repeat(10)} />
          )
        }}
      </FormattedMessage>
    )
  }
}
