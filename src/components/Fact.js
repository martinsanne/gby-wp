import React, { Component } from "react"

import { Html, Icon } from "./utils"

export default class Fact extends Component {
  render() {
    const {
      data: { first_paragraph, second_paragraph },
    } = this.props
    return (
      <div className="Fact">
        <div className="Fact__logo">
          <Icon name="logo2020" />
        </div>
        <div className="Fact__columns">
          {first_paragraph && (
            <div className="Fact__col">
              <Html className="editor" content={first_paragraph} />
            </div>
          )}
          {second_paragraph && (
            <div className="Fact__col">
              <Html className="editor" content={second_paragraph} />
            </div>
          )}
        </div>
      </div>
    )
  }
}
