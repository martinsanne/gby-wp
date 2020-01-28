import React, { Component } from "react"

export default class FooterCredits extends Component {
  render() {
    return (
      <div className="Footer__credits">
        <p>
          Design av{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://erlandbanggren.com"
          >
            Erland G. Banggren
          </a>{" "}
          +{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://heydays.no"
          >
            Heydays
          </a>
          .
        </p>
        <p>
          Utvikling av{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://heydays.no"
          >
            Heydays
          </a>
          .
        </p>
      </div>
    )
  }
}
