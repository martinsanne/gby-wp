import React, { Component } from "react"
import { Link } from "gatsby"
import cc from "classcat"

import Logo from "./Logo"
import Menu from "./Menu"
import LanguageSwitcher from "./LanguageSwitcher"
import { AppConsumer } from "./utils"
import BuyTicket from "./BuyTicket"

export default class Header extends Component {
  render() {
    return (
      <AppConsumer>
        {ctx => {
          return (
            <header
              className={cc({
                Header: true,
                "Header--dark": ctx.state.showMenu,
              })}
            >
              <div className="Header__top">
                <Link
                  className="Header__logo"
                  to={"/"}
                  onClick={ctx.actions.closeMenu}
                >
                  <Logo type="hor" />
                </Link>
                <BuyTicket className="Header__buy" />
                <Menu />
                <div className="Header__lang">
                  <LanguageSwitcher />
                </div>
              </div>
            </header>
          )
        }}
      </AppConsumer>
    )
  }
}
