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
          wordpressHeyMenus {
            menus {
              en {
                primary {
                  items {
                    url
                    wordpress_id
                    title
                  }
                }
              }
              nb {
                primary {
                  items {
                    url
                    wordpress_id
                    title
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <IntlProvider messages={intlTranslations[locale]} locale={locale}>
          <>
            {data.wordpressHeyMenus &&
              data.wordpressHeyMenus.menus &&
              data.wordpressHeyMenus.menus[locale] &&
              data.wordpressHeyMenus.menus[locale].primary && (
                <ul>
                  {data.wordpressHeyMenus.menus[locale].primary.items.map(
                    item => {
                      return (
                        <li key={item.wordpress_id}>
                          <Link to={item.url}>{item.title}</Link>
                        </li>
                      )
                    }
                  )}
                </ul>
              )}

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
