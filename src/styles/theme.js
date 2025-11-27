const brand = {
  heroText: "#365872",
  black: "#1A1F22",
  primary: "#1C2B39",
  teal: "#2C5875",
  white: "#FFFFFF",
  lightBlue: "#B9DDED",
  kochBlue: "#00A8E1",
  blue: "#2C5875",
  darkBlue: "#002E61",
  textGray: "#444444",
  btnGray: "#465158",
  bgGray: "#F4F4F4",
};
const fontSize = {
  heroText: "60px",
  heroText_mobile: "50px",
  bodyText: "22px",
};
const fonts = {
  sans: "font-family: azo-sans-web, sans-serif",
  serif: '"Lora", serif',
};
const size = {
  small: "639px",
  medium: "1024px",
  large: "1025px",
  weird: "1300px",
};
const device = {
  desktop: `screen and (min-width: ${size.large})`,
  mobile: `(max-width: ${size.small})`,
  tablet: `(min-width: ${size.small}) and (max-width:${size.medium})`,
  tabletUp: `(min-width: ${size.small})`,
  laptop: `(min-width: ${size.small}) and (max-width:${size.weird})`,
};
const elements = {
  text: {
    fontFamily: fonts.serif,
    margin: "0",
    color: brand.black,
  },
};

const theme = {
  brand,
  colors: {
    border: "#F9F9FA",
  },
  container: {
    width: "100%",
    maxWidth: "106.5rem",
    padding: "0 80px",
    margin: "0 auto",
  },
  content: {
    maxWidth: "50%",
    marginLeft: "8.3333%",
  },
  device,
  fonts,
  fontSize,
  elements,
  layers: {
    root: -1,
    base: 1,
    content: 10,
    overlay: 100,
    priority: 1000,
  },
  mobileContent: {
    width: "100%",
    maxWidth: "none",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginLeft: "0",
  },
  tabletContent: {
    maxWidth: "66.66667%",
    marginLeft: "0",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
};

export default theme;
