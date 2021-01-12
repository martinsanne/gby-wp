import { css } from "styled-components"
import { responsiveProps } from "./breakpoints"

export const spacing = (key, props) => {
  return ({ theme }) => {
    if (
      !theme?.responsiveSpacing ||
      !theme.responsiveSpacing.hasOwnProperty(key)
    ) {
      return css``
    }

    return responsiveProps(props, theme.responsiveSpacing[key])
  }
}

export default spacing
