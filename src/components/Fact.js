import React, { Component } from "react"

import { Html, Illustration } from "./utils"

export default class Fact extends Component {
  render() {
    const {
      data: { first_paragraph, second_paragraph },
    } = this.props
    return (
      <div className="Fact">
        <div className="Fact__columns">
          {first_paragraph && (
            <div className="Fact__col Fact__col--1">
              <Html className="editor" content={first_paragraph} />
              <span className="Fact__illu">
                <Illustration src="graphics/group-skull.png" />
              </span>
            </div>
          )}
          {second_paragraph && (
            <div className="Fact__col Fact__col--2">
              <span className="Fact__illu">
                <Illustration src="graphics/group-worm.png" />
              </span>
              <Html className="editor" content={second_paragraph} />
            </div>
          )}
        </div>
      </div>
    )
  }
}
