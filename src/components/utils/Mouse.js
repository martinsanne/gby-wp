import { Component } from "react"

export default class Mouse extends Component {
  state = {
    x: 0,
    y: 0,
  }

  componentDidMount = () => {
    window.addEventListener("mousemove", this.handleMouse)
  }

  handleMouse = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  componentWillUnmount = () => {
    window.removeEventListener("mousemove", this.handleMouse)
  }

  render() {
    return this.props.children(this.state)
  }
}
