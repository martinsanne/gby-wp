import React from "react"
import locales from "../../config/i18n"
import { Link } from "gatsby"

// const defaultTranslations = () => {
//   return Object.keys(locales).map(item => {

//   })
// }

const LanguageSwitch = ({ translations }) => {
  if (!translations) {
    translations = locales
  }
  return (
    <ul className="LanguageSwitch">
      {Object.keys(translations).map(key => {
        let item = translations[key]
        if (!item) {
          if (locales[key]) {
            item = locales[key]
          } else {
            return null
          }
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
