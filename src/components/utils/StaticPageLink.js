import React from "react"
import { AppConsumer } from "./AppContext"
import { getStaticPageLink } from "../../../config/site"
import { Link } from "gatsby"

const StaticPageLink = props => {
  return (
    <AppConsumer>
      {({ state }) => {
        let { locale } = state
        let { pageType, ...rest } = props
        return (
          <Link {...rest} to={getStaticPageLink(props.pageType, locale)}>
            {props.children}
          </Link>
        )
      }}
    </AppConsumer>
  )
}

export default StaticPageLink
