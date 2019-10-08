import React, { Component } from "react"

export default class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <div className="Loader__gif">
          <img src="/assets/images/loader-2020.gif" alt="Loading" />
        </div>
      </div>
    )
  }
}
