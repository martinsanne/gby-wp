import React, { Component } from "react"

import { Loader } from "./utils"

/**
 * Docs: https://greencopper.atlassian.net/wiki/spaces/GE/pages/14581905/Greencopper+Web+Embed
 */
export default class GreenCopper extends Component {
  removeExcessAnalytics = () => {
    const allAnalytics = [
      ...document.querySelectorAll(
        '[src="https://www.google-analytics.com/analytics.js"]'
      ),
    ]
    // remove all analytics but the first
    allAnalytics.map(
      (script, i) => i !== 0 && script.parentNode.removeChild(script)
    )
  }

  loadScripts = () => {
    var src =
      "https://s3.amazonaws.com/goeventweb-static.greencopper.com/7.7.1/public/scripts/endpoint.min.gz.js"
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.async = true
    script.src = src
    script.setAttribute("data-gzip", "true")
    script.id = "gw-script"
    script.onload = () => {
      this.removeExcessAnalytics()
    }
    document.body.appendChild(script)
  }

  componentWillUnmount = () => {
    this.removeExcessAnalytics()
  }

  componentDidMount() {
    setTimeout(() => {
      this.removeExcessAnalytics()
    }, 3000)
    if (!document.querySelector("#gw-script")) {
      this.loadScripts()
      this.removeExcessAnalytics()
    }
  }

  componentDidUpdate = prevProps => {
    setTimeout(() => {
      this.removeExcessAnalytics()
    }, 3000)
    if (this.props.view !== prevProps.view) {
      if (!document.querySelector("#gw-script")) {
        this.loadScripts()
      }
    }
  }

  render() {
    // const { view } = this.props
    return (
      <div className="GreenCopper">
        <goevent-web
          id="goevent-web"
          project-tag="oyafestival-2020"
          project-hash="8f9de195bcef4de0af325df3f772fdcc"
          data-language="nor"
        >
          <Loader />
        </goevent-web>
      </div>
    )
  }
}
