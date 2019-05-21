import React, { Component } from "react"
import Helmet from "react-helmet"
import Parser from "html-react-parser"

export default class SEOHeaders extends Component {
  render() {
    const { data } = this.props
    return (
      <Helmet>
        {window.location.hostname.includes("staging") && (
          <meta name="robots" CONTENT="noindex, nofollow" />
        )}
        {data.seo_head && Parser(data.seo_head)}
      </Helmet>
    )
  }
}
