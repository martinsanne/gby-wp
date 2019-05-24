import React, { Fragment } from "react"
import locales from "../../config/i18n"
import { Link } from "gatsby"
import cc from "classcat"
import { AppConsumer } from "./utils"

const LanguageSwitcher = () => {
  return (
    <AppConsumer>
      {({ state }) => {
        let { translations, locale } = state
        if (!translations) {
          translations = locales
        }
        const translationKeys = Object.keys(translations)
        return (
          <p
            className={cc({
              LanguageSwitcher: true,
              "LanguageSwitcher--dark": state.showMenu,
            })}
          >
            {translationKeys.map((key, i) => {
              let item = translations[key]
              if (!item) {
                if (locales[key]) {
                  item = locales[key]
                } else {
                  return null
                }
              }
              return (
                <Fragment key={`lang-switch-item-${key}`}>
                  <Link
                    className={cc({
                      LanguageSwitcher__item: true,
                      "LanguageSwitcher__item--is-active": locale === key,
                    })}
                    to={item.url}
                  >
                    {locales[key].languageTitle}
                  </Link>
                  {i < translationKeys.length - 1 && (
                    <span className="LanguageSwitcher__divider">/</span>
                  )}
                </Fragment>
              )
            })}
          </p>
        )
      }}
    </AppConsumer>
  )
}

export default LanguageSwitcher
