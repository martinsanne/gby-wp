import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AppConsumer } from "./utils"

const Downloads = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressHeyAcfoptions {
        edges {
          node {
            locale
            options {
              url_app_download_android
              url_app_download_ios
            }
          }
        }
      }
    }
  `)

  return (
    <AppConsumer>
      {({ state }) => {
        const { locale } = state
        const settings = data.allWordpressHeyAcfoptions.edges.filter(item => {
          return item.node.locale === locale
        })[0].node.options
        return (
          <div className="Downloads">
            <span>Last ned appen</span>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={settings.url_app_download_ios}
            >
              iOS
            </a>
            &nbsp;&amp;&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={settings.url_app_download_android}
            >
              Android
            </a>
          </div>
        )
      }}
    </AppConsumer>
  )
}

export default Downloads
