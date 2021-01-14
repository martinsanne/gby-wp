import styled, { css } from "styled-components"
import { bp } from "../../styled/utils/breakpoints"

const Button = styled.button(
  ({ theme }) => css`
    appearance: none;
    line-height: 1.5;
    background-color: transparent;
    transition: all 0.12s ease;
    border: 2px solid ${theme.colors.text};
    color: ${theme.colors.text};
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    position: relative;
    background-color: ${theme.colors.white};
    padding: 5px 5px;
    flex: 0 0 auto;
    text-align: center;
    font-size: 12px;
    &:hover,
    &:focus {
      background: ${theme.colors.text};
      color: ${theme.colors.white};
    }
    ${bp({
      xssm: css`
        font-size: 1em;
        padding: 5px 10px;
      `,
    })}
  `
)

export default Button
