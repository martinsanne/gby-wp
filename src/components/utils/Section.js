import React, { Component } from "react"
import Html from "./Html"
import Doodle from "./Doodle"

export default class Section extends Component {
  render() {
    const { title, desc } = this.props
    return (
      <section className="Section">
        <Doodle>
          {title && (
            <header className="Section__header">
              <h2 className="Section__title">
                <Html content={title} />
              </h2>
              {desc && (
                <div className="Section__desc">
                  <Html content={desc} />
                </div>
              )}
            </header>
          )}
          <div className="Section__content">{this.props.children}</div>
        </Doodle>
        <div className="Section__divider">
          <Doodle type="bolgestrek" />
        </div>
      </section>
    )
  }
}
