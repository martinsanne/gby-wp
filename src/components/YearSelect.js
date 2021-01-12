import React from "react"
import { getBlogYearRange } from "../utils/functions"
import { FormattedMessage } from "react-intl"
import { navigate } from "gatsby"
import { getArchiveLink } from "../../config/site"
import cc from "classcat"

const YearSelect = ({ year, locale, page }) => {
  return (
    <FormattedMessage id="blog.allYears" defaultMessage="Archive">
      {text => (
        <select
          className={cc({
            YearSelect: true,
            "YearSelect--active": year ? true : false,
          })}
          value={year}
          onBlur={event => {
            event.preventDefault()
            if (!event.target.value) {
              navigate(page.link)
            } else {
              navigate(getArchiveLink(locale, event.target.value))
            }
          }}
        >
          <option value="">{text}</option>
          {getBlogYearRange().map(year => {
            return (
              <option key={`YearOption-${year}`} value={year}>
                {year}
              </option>
            )
          })}
        </select>
      )}
    </FormattedMessage>
  )
}

export default YearSelect
