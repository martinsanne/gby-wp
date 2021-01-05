import styled, { css } from "styled-components"

const Serif = styled.span(
  ({ theme }) => css`
    font-family: ${theme.fontFamily.serif};
  `
)

export default Serif
