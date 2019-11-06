import React from "react"
// import { Link, useStaticQuery, graphql } from "gatsby"
import { FormattedMessage } from "react-intl"

import Partners from "./Partners"
import FestivalInfoMarquee from "./FestivalInfoMarquee"
import Social from "./Social"
import Downloads from "./Downloads"
import NewsletterSignup from "./NewsletterSignup"
import FooterCredits from "./FooterCredits"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="Footer">
      <Partners className="Footer__partners" />
      <div className="Footer__wrapper">
        <FestivalInfoMarquee />
        <div className="Footer__decor">
          <div className="Footer__left">
            <div className="Footer__logo">
              <Logo fill="#FFFFFF" />
            </div>
            <p className="Footer__decor-item">
              <FormattedMessage
                id="global.dateAndPlace"
                defaultMessage="11.–15. august, Tøyenparken, Oslo"
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
            <FooterCredits />
          </div>
          <Downloads className="Footer__item" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
