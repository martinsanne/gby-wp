const fontFamily = {
  serif: `"century-old-style-std", Times, "Times New Roman", serif`,
  sans: `"Swiss", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
  pixel: `"Neue Pixel", Times, "Times New Roman", serif`,
}

const brandColors = {
  gray: "#f4f3f3",
  black: "#000000",
  white: "#FEFEFE",
  blue: "#5f97d1",
}

const colors = {
  ...brandColors,
  main: brandColors.black,
  secondary: brandColors.black,
  interactive: brandColors.blue,
  text: brandColors.black,
  border: brandColors.black,
  background: brandColors.gray,
  // alert: brandColors.black,
  // error: brandColors.black,
}

const breakpoints = {
  xs: 0,
  sm: 550,
  md: 960,
  lg: 1200,
  xl: 1400,
  xxl: 1600,
}

export default {
  fontFamily,
  colors,
  breakpoints,
}
