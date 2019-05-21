import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import LanguageSwitch from "../components/LanguageSwitch"

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
        {
          allWordpressHeyMenus {
            edges {
              node {
                location
                locale
                items {
                  url
                  wordpress_id
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const menus = data.allWordpressHeyMenus.edges
        const primaryMenu = menus.filter(item => {
          return item.node.locale === locale && item.node.location === "primary"
        })

        return (
          <IntlProvider messages={intlTranslations[locale]} locale={locale}>
            <>
              {primaryMenu && primaryMenu[0] && primaryMenu[0].node && (
                <ul>
                  {primaryMenu[0].node.items.map(item => {
                    return (
                      <li key={item.wordpress_id}>
                        <Link to={item.url}>{item.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              )}
              <LanguageSwitch translations={translations} />
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with{" "}
                <a href="https://www.gatsbyjs.org">Gatsby</a> |{" "}
                <a href="/about">About Us</a>
              </footer>
            </>
          </IntlProvider>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
