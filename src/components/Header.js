import React, { useContext } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import Logo2021Lockup from "./Logo2021Lockup"
import Menu from "./Menu"
import LanguageSwitcher from "./LanguageSwitcher"
import { AppConsumer, AppContext } from "./utils"
import BuyTicketSpider from "./BuyTicketSpider"
import BuyTicketButton from "./BuyTicketButton"
import { bp } from "../styled/utils/breakpoints"
import { spacing } from "../styled/utils/spacing"
import Container from "./Container"

const Header = () => {
  const ctx = useContext(AppContext)
  return (
    <StyledHeader dark={Boolean(ctx.state.showMenu)}>
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
            <div className="Header__ticketSpider">
              <BuyTicketSpider />
            </div>
            <div className="Header__ticketButton">
              <BuyTicketButton />
            </div>
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
}

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
      padding-right: 7px;
      margin-left: auto;
      ${bp({
        sm: css`
          padding-right: 15px;
        `,
      })}
    }

    .Header__ticketButton {
      ${bp({
        lg: css`
          display: none;
        `,
      })}
    }

    .Header__ticketSpider {
      display: none;
      ${bp({
        lg: css`
          display: block;
        `,
      })}
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
