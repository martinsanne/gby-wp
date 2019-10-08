import React, { Component } from "react"

// Original loader: https://codepen.io/martinsanne/pen/aPpjQm

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
