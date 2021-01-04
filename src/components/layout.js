import React from "react"
import PropTypes from "prop-types"
import { AppProvider } from "../components/utils"
import cc from "classcat"

/**
 * React intl setup
 */
import { IntlProvider } from "react-intl"
import intlTranslations from "../intl"
import Header from "./Header"
import Footer from "./Footer"
import { ThemeProvider } from "styled-components"
import baseTheme from "../styles/baseTheme"

const Layout = ({ children, locale, translations, options, settings }) => {
  if (!locale) {
    locale = "nb"
  }
  return (
    <IntlProvider messages={intlTranslations[locale]} locale={locale}>
      <AppProvider
        translations={translations}
        locale={locale}
        options={options}
        settings={settings}
      >
        <ThemeProvider theme={baseTheme}>
          <div
            className={cc({
              App: true,
              "App--development": process.env.NODE_ENV === "development",
            })}
          >
            <div className="App__routes">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </AppProvider>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
