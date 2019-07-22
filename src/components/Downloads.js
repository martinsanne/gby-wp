import React from "react"
import { FormattedMessage } from "react-intl"
import { AppConsumer } from "./utils"

const Downloads = () => {
  return (
    <AppConsumer>
      {({ state }) => {
        const { options } = state

        if (!options.options) {
          return null
        }

        const settings = options.options

        return (
          <div className="Downloads">
            <span>
              <FormattedMessage
                id="downloads.title"
                defaultMessage="Last ned appen"
              />
            </span>
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
