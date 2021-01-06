import React from "react"
import { selectUnit } from "@formatjs/intl-utils"
import { FormattedRelativeTime } from "react-intl"

/**
 * FormattedRelativeTime does not give the optimal time unit (days, hours, minutes, seconds)
 * use the selectUnit helper provided by the react-intl authors
 */

const RelativeTime = ({ date, className }) => {
  const { value, unit } = selectUnit(date)
  return (
    <FormattedRelativeTime className={className} value={value} unit={unit} />
  )
}

export default RelativeTime
