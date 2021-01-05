import { css } from "styled-components"

export const emSize = px => `${px / 16}em`

/**
 * Mobile first breakpoint function generator
 * @param {*} sizes
 */
export const bp = sizes => {
  return function({ theme }) {
    return Object.keys(sizes).map(key => {
      // Return content if breakpoint key does not exist
      if (!theme.breakpoints[key]) {
        return css`
          ${sizes[key]}
        `
      }

      // Get current breakpoint size
      const currentBreakpoint = theme.breakpoints[key]

      // Return content without media query if it's a base value
      if (currentBreakpoint === 0) {
        return css`
          ${sizes[key]}
        `
      }

      // Return content inside breakpoint
      return css`
        @media screen and (min-width: ${emSize(currentBreakpoint)}) {
          ${sizes[key]}
        }
      `
    })
  }
}

const normalizeNumberValue = val => {
  if (typeof val === "number") {
    // If a number is passed, we assume the value to be translated to rem
    return `${val / 10}rem`
  }
  return val
}

export const responsiveProps = (props, values) => {
  const breakpointValues = Object.keys(values).reduce((acc, key) => {
    const val = normalizeNumberValue(values[key])
    acc[key] = css`
      ${props.map(
        prop => css`
          ${prop}: ${val};
        `
      )}
    `
    return acc
  }, {})

  return css`
    ${bp(breakpointValues)}
  `
}

export default bp
