import styled, { css } from "styled-components"
import { spacing } from "../styled/utils/spacing"

const Container = styled.div(
  ({ theme }) => css`
    max-width: 2000px;
    margin-left: auto;
    margin-right: auto;
    ${spacing("container", ["padding-left", "padding-right"])};
  `
)

export default Container
