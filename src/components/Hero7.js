import React, { Component, createRef } from "react"
import throttle from "lodash/throttle"
import { FormattedMessage } from "react-intl"

import { Icon, FeaturedImage, Doodle } from "./utils"
import Artists from "./Artists"

export function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export default class Hero6 extends Component {
  wrapper = createRef()

  state = {
    images: [],
    currentArtist: null,
    columns: 1,
  }

  componentDidMount = () => {
    this.setState({
      images: this.props.hero.headliners,
    })
    this.setColumns()
    window.addEventListener("resize", this.handleResize)
  }

  handleResize = throttle(e => {
    clearInterval(this.interval)
    this.setColumns()
  }, 500)

  setColumns = () => {
    let columns

    if (window.matchMedia("(min-width: 1200px)").matches) {
      /* The viewport is at least 1200 pixels wide */
      columns = 4
    } else if (window.matchMedia("(min-width: 870px)").matches) {
      /* The viewport is at least 1200 pixels wide */
      columns = 3
    } else {
      columns = 2
    }

    this.setState(
      {
        columns,
      },
      () => this.startInterval()
    )
  }

  startInterval = () => {
    this.interval = setInterval(() => {
      if (this.state.images) {
        const images = [...this.state.images]
        const selected = images.slice(0, this.state.columns)
        this.setState({
          images: [
            ...images.slice(this.state.columns, images.length),
            ...selected,
          ],
        })
      }
    }, 6000)
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize)
    clearInterval(this.interval)
  }

  render() {
    const { images } = this.state
    return (
      <div className="Hero7">
        <Doodle>
          <Doodle>
            <div className="Hero7__wrapper">
              <header className="Hero7__header">
                <Icon className="Hero7__logo" name="logo2019" />
                <h3 className="Hero7__tagline">
                  <FormattedMessage
                    id="global.dateAndPlace"
                    defaultMessage="6.–10. august, Tøyenparken, Oslo"
                  />
                </h3>
              </header>
              {images && (
                <div className="Hero7__images">
                  {this.state.images.length > this.state.columns &&
                    new Array(this.state.columns).fill("x").map((x, i) => (
                      <div
                        className="Hero7__image"
                        key={`${this.state.images[i].id}${i}`}
                        style={{
                          ...this.state.images[i].style,
                          zIndex: randomIntFromRange(-1, 1),
                          animationDirection:
                            Math.random() > 0.5 ? "reverse" : "normal",
                          animationName:
                            Math.random() > 0.5
                              ? "showImage--hor"
                              : "showImage--ver",
                          top: `${randomIntFromRange(-10, 45)}%`,
                          animationDelay: `${randomIntFromRange(100, 1000)}ms`,
                          marginRight: `${randomIntFromRange(-10, 10)}%`,
                        }}
                      >
                        <FeaturedImage
                          {...this.state.images[i].featured_image}
                        />
                      </div>
                    ))}
                </div>
              )}
            </div>
          </Doodle>
        </Doodle>
        <div className="Hero7__artists">
          <Artists artists={this.props.hero.headliners} hero />
        </div>
      </div>
    )
  }
}
