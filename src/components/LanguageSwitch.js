import React from "react"
import locales from "../../config/i18n"
import { Link } from "gatsby"

const LanguageSwitch = ({ translations }) => {
  if (!translations) {
    return null
  }
  console.log(translations)
  return (
    <ul className="LanguageSwitch">
      {Object.keys(translations).map(key => {
        const item = translations[key]
        if (!item) {
          return null
        }
        return (
          <li className="LanguageSwitch__item" key={`lang-switch-item-${key}`}>
            <Link className="LanguageSwitch__link" to={item.url}>
              {locales[key].languageTitle}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default LanguageSwitch
