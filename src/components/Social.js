import React from "react"
import cc from "classcat"
import { useStaticQuery, graphql } from "gatsby"

import { createSocialLinksFromYOAST } from "../utils/wpHelpers"
import { Icon } from "./utils"

const Social = props => {
  const data = useStaticQuery(graphql`
    {
      wordpressHeySettings {
        wpseo {
          social {
            facebook_site
            instagram_url
            linkedin_url
          }
        }
      }
    }
  `)

  const settings = data.wordpressHeySettings

  const { className } = props
  const socialLinks = createSocialLinksFromYOAST(settings.wpseo.social)
  return (
    <div
      className={cc({
        Social: true,
        [className]: className,
      })}
    >
      {socialLinks.map(item => {
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={`SocialLink-${item.icon}`}
            aria-label={item.icon}
            className="Social__item"
            href={item.url}
          >
            <Icon
              className="Social__icon"
              color="white"
              name={item.icon}
              aria-label={`${item.icon} icon`}
            />
          </a>
        )
      })}
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tilgjengelighetsmerket"
        className="Social__item"
        href="https://www.tilgjengelighetsmerket.no"
      >
        <Icon
          className="Social__icon"
          color="white"
          name="accesibility"
          aria-label="Tilgjengelighetsmerket icon"
        />
      </a>
    </div>
  )
}

export default Social
