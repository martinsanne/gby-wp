import React from "react"
import { FormattedDate } from "react-intl"

import { daysFromNow } from "../../utils/date"
import RelativeTime from "../RelativeTime"

const PostDate = ({ date, className }) => {
  const dateObject = new Date(date)
  /**
   * Use full date if more than 5 days ago
   */
  const daysSince = daysFromNow(dateObject)
  const isMorethanFiveDays = daysSince > -5

  return (
    <time dateTime={date} className={className}>
      {!isMorethanFiveDays ? (
        <FormattedDate
          year="numeric"
          month="long"
          day="numeric"
          value={dateObject}
        />
      ) : (
        <RelativeTime date={dateObject} />
      )}
    </time>
  )
}

export default PostDate
