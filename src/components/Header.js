import React, { Component } from "react"
import { Link } from "gatsby"
import cc from "classcat"

import Logo2021Lockup from "./Logo2021Lockup"
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
                  <Logo2021Lockup />
                </Link>
                <div className="Header__buy">
                  <BuyTicket />
                </div>
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
