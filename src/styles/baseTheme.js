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
  mediumGray: "#ababab",
}

const colors = {
  ...brandColors,
  main: brandColors.black,
  secondary: brandColors.black,
  interactive: brandColors.blue,
  text: brandColors.black,
  border: brandColors.black,
  background: brandColors.gray,
}

const spacing = {
  0: 0,
  1: "6px",
  2: "12px",
}

const responsiveSpacing = {
  xs: {
    xs: "6px",
    sm: "12px",
  },
  sm: {
    xs: "12px",
    sm: "24px",
  },
  md: {
    xs: "24px",
    sm: "48px",
  },
  lg: {
    xs: "30px",
    sm: "60px",
  },
  section: {
    xs: "80px",
    sm: "120px",
    md: "200px",
  },
  halfsection: {
    xs: "40px",
    sm: "60px",
    md: "100px",
  },
  container: {
    xs: "10px",
    sm: "1.5rem",
    lg: "48px",
  },
  header: {
    xs: "10px",
    sm: "20px",
    // lg: "48px",
  },
}

const breakpoints = {
  xs: 0,
  xssm: 400,
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
  spacing,
  responsiveSpacing,
}
