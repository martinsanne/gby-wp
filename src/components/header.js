import React, { Component } from "react"
import { Link } from "gatsby"
import cc from "classcat"

import Logo from "./Logo"
import Menu from "./Menu"
import LanguageSwitcher from "./LanguageSwitcher"
import { AppConsumer, Doodle } from "./utils"
import { FormattedMessage } from "react-intl"

export default class Header extends Component {
  render() {
    const { data } = this.props
    return (
      <AppConsumer>
        {ctx => (
          <header
            className={cc({
              Header: true,
              "Header--dark": ctx.state.showMenu,
            })}
          >
            <Doodle type="blubb">
              <div className="Header__top">
                <Link
                  className="Header__logo"
                  to={"/"}
                  onClick={ctx.actions.closeMenu}
                >
                  <Logo type="hor" />
                </Link>
                <Menu />
                <div className="Header__lang">
                  <LanguageSwitcher />
                </div>
              </div>
            </Doodle>
            {data && data.tickets_url && (
              <a
                className="Header__buy shake"
                href={data.tickets_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.tickets_button_text || (
                  <FormattedMessage
                    id="header.buyButton"
                    defaultMessage="Buy tickets"
                  />
                )}
              </a>
            )}
          </header>
        )}
      </AppConsumer>
    )
  }
}
