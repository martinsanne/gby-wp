import React from "react"
import { Link, useStaticQuery } from "gatsby"
import { FormattedMessage } from "react-intl"

import Partners from "./Partners"
import FestivalInfoMarquee from "./FestivalInfoMarquee"
import { Doodle, Html, Icon } from "./utils"
import Social from "./Social"
import Downloads from "./Downloads"
import NewsletterSignup from "./NewsletterSignup"
import FooterCredits from "./FooterCredits"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      wordpressHeySettings {
        wp_page_for_privacy_policy {
          link
          post_title
        }
      }
    }
  `)

  const settings = data.wordpressHeySettings

  return (
    <footer className="Footer">
      <Partners className="Footer__partners" />
      <Doodle>
        <Doodle>
          <div className="Footer__wrapper">
            <FestivalInfoMarquee />
            <div className="Footer__decor">
              <div className="Footer__left">
                <Icon
                  className="Footer__decor-logo"
                  color="white"
                  name="logo2019"
                />
                <p className="Footer__decor-item">
                  <FormattedMessage
                    id="global.dateAndPlace"
                    defaultMessage="6.–10. august, Tøyenparken, Oslo"
                  />
                </p>
              </div>
              <div className="Footer__right">
                <NewsletterSignup onDark />
              </div>
            </div>
            <div className="Footer__content">
              <div className="Footer__item">
                <Social />
                <ul className="Footer__privacy">
                  {settings && settings.wp_page_for_privacy_policy && (
                    <li>
                      <Link to={settings.wp_page_for_privacy_policy.link}>
                        <Html
                          content={
                            settings.wp_page_for_privacy_policy.post_title
                          }
                        />
                      </Link>
                    </li>
                  )}
                </ul>
                <FooterCredits />
              </div>
              <Downloads className="Footer__item" />
            </div>
          </div>
        </Doodle>
      </Doodle>
    </footer>
  )
}

export default Footer
