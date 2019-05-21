import React from "react"
import { Doodle } from "../components/utils"
import { FormattedMessage } from "react-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <article>
      <SEO title="Side ikke funnet - Øyafestivalen" />
      {/* <Helmet>
      <title>Side ikke funnet - Øyafestivalen</title>
      <meta name="robots" content="noindex,follow" />
      <meta property="og:type" content="object" />
    </Helmet> */}
      <Doodle>
        <Doodle>
          <div className="Page ErrorBoundary">
            <header className="Page__header">
              <h1 className="Page__title">
                <FormattedMessage
                  id="404.title"
                  defaultMessage="Hmm, den siden fant vi ikke (404)"
                />
              </h1>
            </header>
            <Link className="button ErrorBoundary__button" to="/">
              <FormattedMessage
                id="404.button"
                defaultMessage="Gå tilbake til forsiden"
              />
            </Link>
          </div>
        </Doodle>
      </Doodle>
    </article>
  </Layout>
)

export default NotFoundPage
