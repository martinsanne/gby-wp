import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import LanguageSwitch from "../components/LanguageSwitch"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, locale, translations }) => {
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
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout