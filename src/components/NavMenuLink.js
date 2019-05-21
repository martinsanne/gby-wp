import React, { Component } from "react"
import { Link } from "gatsby"
import cc from "classcat"
import { AppConsumer } from "./utils"

/**
 * Handles whether we should render external anchor or internal Link element
 */
export default class NavMenuLink extends Component {
  render() {
    const { to, target, titleAttr } = this.props
    if (!to) {
      console.warn(`Missing "to" parameter for link.`)
      return null
    }
    if (to.indexOf("://") !== -1 || target === "_blank") {
      return (
        <AppConsumer>
          {({ actions }) => (
            <a
              target={target}
              rel={target === "_blank" && "noopener noreferrer"}
              title={titleAttr}
              href={this.props.to}
              onClick={actions.closeMenu}
            >
              {this.props.children}
            </a>
          )}
        </AppConsumer>
      )
    }
    return (
      <AppConsumer>
        {({ actions }) => (
          <Link
            title={titleAttr}
            activeClassName={
              this.props.className ? `${this.props.className}--is-active` : null
            }
            className={cc({ [this.props.className]: this.props.className })}
            to={to}
            onClick={actions.closeMenu}
          >
            {this.props.children}
          </Link>
        )}
      </AppConsumer>
    )
  }
}
