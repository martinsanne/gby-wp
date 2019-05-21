import React, { Component } from "react"
import { FormattedRelative, FormattedDate } from "react-intl"
import cc from "classcat"

export default class PostDate extends Component {
  render() {
    /**
     * React-intl will handle date formatting for different languages.
     */
    const { date } = this.props
    const dateObject = new Date(date)

    /**
     * Use full date if more than 5 days ago
     */
    const isMorethanFiveDays = true //daysFromNow(date, 5)

    return (
      <time
        dateTime={date}
        className={cc({ [this.props.className]: this.props.className })}
      >
        {!isMorethanFiveDays ? (
          <FormattedDate
            year="numeric"
            month="long"
            day="numeric"
            value={dateObject}
          />
        ) : (
          <FormattedRelative value={dateObject} />
        )}
      </time>
    )
  }
}
