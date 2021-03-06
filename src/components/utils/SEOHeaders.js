import React, { Component } from "react"
import Helmet from "react-helmet"
import Parser from "html-react-parser"

export default class SEOHeaders extends Component {
  render() {
    const { data } = this.props
    return (
      <Helmet>
        {data.seo_head &&
          Parser(data.seo_head).filter(domNode => {
            return (
              domNode.type &&
              (domNode.type === "meta" || domNode.type === "title")
            )
          })}
      </Helmet>
    )
  }
}
