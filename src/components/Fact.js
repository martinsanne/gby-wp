import React, { Component } from "react"
import { Link } from "gatsby"
import cc from "classcat"

import { Html, FeaturedImage, Overlay } from "./utils"

export default class Fact extends Component {
  render() {
    const {
      data: { title, fact, image, link },
    } = this.props
    const Component = link ? Link : "div"
    return (
      <Component
        to={link}
        className={cc({ Fact: true, "Fact--with-image": image })}
      >
        {image && (
          <div className="Fact__image">
            <Overlay hoverable>
              <FeaturedImage {...image} />
            </Overlay>
          </div>
        )}
        <div className="Fact__content">
          {title && (
            <h2 className="Fact__title">
              <Html content={title} />
            </h2>
          )}
          {fact && <Html content={fact} />}
        </div>
      </Component>
    )
  }
}
