import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import theme from "../styles/theme"

const ThemeWrapper = ({ children, themeName }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

ThemeWrapper.propTypes = {
	children: PropTypes.node.isRequired,
	themeName: PropTypes.string,
}

ThemeWrapper.defaultProps = {
	themeName: "default",
}

export default ThemeWrapper
