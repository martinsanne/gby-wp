/**
 * Usage:
 *
 * Doodle checks if it has children and then assumes
 * what to do. Ex. If you have children ex.
 *
 *  <Doodle type="random">
 *    <Title />
 *    <Image />
 *  </Doodle />
 *
 * It will then place doodles random on the area of
 * the children. If there are no children it will
 * statically place it where it is called ex.
 *
 * <Doodle type="streker" />
 *
 * @param type {string} determines what group of
 * doodles it should get. Use 'random' if you want
 * it to get a random one. You can also not pass type
 * and it will default to random.
 *
 * List of types is in doodles.js in /utils
 */

import React, { Component } from "react"
import cc from "classcat"

import { emptyGif } from "../../utils/lazysizes"
import { getDoodleByType } from "../../utils/doodles"

export default class Doodle extends Component {
  state = {
    style: {},
    src: emptyGif,
    lastWindowWidth: null,
  }
  componentDidMount = () => {
    if (this.props.children) {
      if (typeof window !== `undefined`) {
        this.setState({
          src: getDoodleByType(this.props.type || "random"),
        })
      }
      this.generatePosition()
    }
  }

  generatePosition = () => {
    this.setState({
      style: {
        left: `${Math.floor(Math.random() * 80)}%`,
        top: `${Math.floor(Math.random() * 100)}%`,
      },
    })
    this.setState({ lastWindowWidth: window.innerWidth })
  }

  render() {
    const { onDark, children } = this.props
    const { style, src } = this.state

    return (
      <div
        className={cc({
          Doodle: true,
          "Doodle--is-relative": !children,
          "Doodle--onDark": onDark,
        })}
        ref={this.container}
      >
        <div className="Doodle__item" style={style}>
          <img className="Doodle__img lazyload" src={src} alt="" />
        </div>
        {children}
      </div>
    )
  }
}
