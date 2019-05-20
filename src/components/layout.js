import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import LanguageSwitch from "../components/LanguageSwitch"

import Header from "./header"
import "./layout.css"

/**
 * React intl setup
 */
import { IntlProvider, addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import nb from "react-intl/locale-data/nb"
import intlTranslations from "../intl"

addLocaleData([...en, ...nb])

const Layout = ({ children, locale, translations }) => {
  if (!locale) {
    locale = "nb"
  }
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <IntlProvider messages={intlTranslations[locale]} locale={locale}>
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <LanguageSwitch translations={translations} />
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with{" "}
                <a href="https://www.gatsbyjs.org">Gatsby</a> |{" "}
                <a href="/about">About Us</a>
              </footer>
            </div>
          </>
        </IntlProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
