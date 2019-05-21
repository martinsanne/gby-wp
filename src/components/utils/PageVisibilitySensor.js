/**
 * Adjusted from https://stackoverflow.com/questions/1060008/is-there-a-way-to-detect-if-a-browser-window-is-not-currently-active
 */

import { Component } from "react"

export default class PageVisibilitySensor extends Component {
  state = {
    isPageVisible: true,
    key: null,
  }
  componentDidMount = () => {
    let hidden = "hidden"
    if (hidden in document) {
      document.addEventListener("visibilitychange", this.handlePageVisibility)
      this.setState({
        key: "visibilitychange",
      })
    } else if ((hidden = "mozHidden") in document) {
      document.addEventListener(
        "mozvisibilitychange",
        this.handlePageVisibility
      )
      this.setState({
        key: "mozvisibilitychange",
      })
    } else if ((hidden = "webkitHidden") in document) {
      document.addEventListener(
        "webkitvisibilitychange",
        this.handlePageVisibility
      )
      this.setState({
        key: "webkitvisibilitychange",
      })
    } else if ((hidden = "msHidden") in document) {
      document.addEventListener("msvisibilitychange", this.handlePageVisibility)
      this.setState({
        key: "msvisibilitychange",
      })
    }
    // IE 9 and lower:
    else if ("onfocusin" in document) {
      document.onfocusin = document.onfocusout = this.handlePageVisibility
      this.setState({
        key: "visibilitychange",
      })
    }
    // All others:
    else
      window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.handlePageVisibility
  }
  handlePageVisibility = e => {
    this.setState({
      isPageVisible: document.hidden ? false : true,
    })
  }
  componentWillUnmount = () => {
    if (this.state.key) {
      document.removeEventListener(this.state.key, this.handlePageVisibility)
    }
  }

  render() {
    return this.props.children(this.state)
  }
}
