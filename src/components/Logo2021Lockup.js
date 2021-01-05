import React from "react"
import styled, { css } from "styled-components"
import Logo2021 from "./Logo2021"

const Logo2021Lockup = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Logo2021 />
      <div className="Logo__date">
        Tøyenparken
        <br />
        10.-14. august
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    svg {
      height: 35px;
      width: auto;
      margin-right: 1rem;
    }
    .Logo__date {
      font-size: 18px;
      line-height: 1.2;
      font-family: ${theme.fontFamily.serif};
    }
  `
)

export default Logo2021Lockup
