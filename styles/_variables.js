const colorValues = {
  primary: "#ffd83d",
  offBlack: "#262626",
  black: "#212121",
  secondary: "rgba(33, 33, 33, 0.75)",
  gray: "#4a4a4a",
  offWhite: "#fafafa",
  white: "#ffffff"
};

const theme = {
  font: {
    regular: 400,
    semibold: 600,
    bold: 700
  },
  maxWidth: "1280px",
  color: {
    primary: colorValues.primary,
    offBlack: colorValues.offBlack,
    black: colorValues.black,
    secondary: colorValues.secondary,
    gray: colorValues.gray,
    offWhite: colorValues.offWhite,
    white: colorValues.white
  },
  breakpoint: {
    sm: "min-width: 544px",
    md: "min-width: 768px",
    lg: "min-width: 1024px",
    xl: "min-width: 1280px"
  }
};

export default theme;