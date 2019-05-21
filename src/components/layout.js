import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql, Link } from "gatsby"
import { AppProvider } from "../components/utils"

/**
 * React intl setup
 */
import { IntlProvider, addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import nb from "react-intl/locale-data/nb"
import intlTranslations from "../intl"
import Header from "./Header"
import Footer from "./Footer"

addLocaleData([...en, ...nb])

const Layout = ({ children, locale, translations }) => {
  if (!locale) {
    locale = "nb"
  }
  return (
    <IntlProvider messages={intlTranslations[locale]} locale={locale}>
      <AppProvider translations={translations} locale={locale}>
        <div className="App">
          <div className="App__routes">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </AppProvider>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
