import React, { Component } from "react"

// import VisuallyHidden from './VisuallyHidden'

export default class Loader extends Component {
  state = {
    show: false,
  }

  showLoader = () => {
    this.timeout = setTimeout(() => {
      this.setState({ show: true })
    }, 300)
  }
  componentWillUnmount = () => {
    clearTimeout(this.timeout)
  }

  render() {
    const { show } = this.state
    return (
      <div className="Loader">
        {show && (
          <div className="Loader__gif">
            <img src="/assets/images/loader-hd2.gif" alt="Loading" />
          </div>
        )}
      </div>
    )
  }
}
