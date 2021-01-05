import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import Logo2021Lockup from "./Logo2021Lockup"
import Menu from "./Menu"
import LanguageSwitcher from "./LanguageSwitcher"
import { AppConsumer } from "./utils"
import BuyTicket from "./BuyTicket"
import { bp } from "../styled/utils/breakpoints"
import { spacing } from "../styled/utils/spacing"
import Container from "./Container"

const Header = () => {
  return (
    <AppConsumer>
      {ctx => {
        return (
          <StyledHeader dark={Boolean(ctx.state.showMenu)}>
            <DateBanner>10.—14. august 2021, Tøyenparken</DateBanner>
            <Container>
              <div className="Header__content">
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
                <div className="Header__menu">
                  <Menu />
                </div>
                <div className="Header__lang">
                  <LanguageSwitcher />
                </div>
              </div>
            </Container>
          </StyledHeader>
        )
      }}
    </AppConsumer>
  )
}

const DateBanner = styled.div(
  ({ theme }) => css`
    padding: 2px;
    background: ${theme.colors.mediumGray};
    font-size: 12px;
    text-align: center;
    color: ${theme.colors.text};
    display: none;
    /* ${bp({
      md: css`
        display: none;
      `,
    })} */
  `
)

const StyledHeader = styled.header(
  ({ theme, dark }) => css`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: ${theme.colors.background};

    .Header__content {
      ${spacing("header", ["padding-top", "padding-bottom"])};
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      align-items: center;
      position: relative;
    }

    .Header__lang {
      display: none;
      text-align: right;
    }

    .Header__logo,
    .Header__menu {
      flex: 0 0 auto;
    }

    .Header__buy {
      justify-content: flex-end;
      padding-right: 15px;
      margin-left: auto;
    }

    ${bp({
      md: css`
        .Header__logo,
        .Header__menu {
          flex: 0 0 260px;
        }
        .Header__buy {
          flex: 1 1 100%;
          display: flex;
          justify-content: center;
        }
      `,
      lg: css`
        .Header__lang {
          display: block;
          flex: 0 0 260px;
        }
        .Header__buy {
          position: absolute;
          z-index: 99;
          white-space: nowrap;
          top: 0;
          right: 100px;
        }
      `,
    })}

    ${dark &&
      css`
        color: ${theme.colors.white};
        background: ${theme.colors.black};
        .Header__buy {
          display: none;
        }
      `}
  `
)

export default Header
