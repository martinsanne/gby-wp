import React from "react"
import styled, { css } from "styled-components"
import Logo2021 from "./Logo2022"
import { bp } from "../styled/utils/breakpoints"
import { FormattedMessage } from "react-intl"

const Logo2021Lockup = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Logo2021 />
      <div className="Logo__date">
        <FormattedMessage
          id="logo.dateAndPlace"
          default="Tøyenparken {linebreak}10.—14. august"
          values={{
            linebreak: <br />,
          }}
        />
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
      width: auto;
      margin-right: 8px;
      height: 25px;
    }
    .Logo__date {
      line-height: 1.2;
      font-family: ${theme.fontFamily.serif};
      font-size: 12px;
    }
    ${bp({
      sm: css`
        svg {
          height: 35px;
          margin-right: 1rem;
        }
        .Logo__date {
          display: block;
          font-size: 18px;
        }
      `,
    })}
  `
)

export default Logo2021Lockup
