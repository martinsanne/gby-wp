import React from "react"
// import { FormattedMessage } from "react-intl"

import Partners from "./Partners"
import FestivalInfoMarquee from "./FestivalInfoMarquee"
import Social from "./Social"
import Downloads from "./Downloads"
// import NewsletterSignup from "./NewsletterSignup"
import FooterCredits from "./FooterCredits"
// import styled from "styled-components"
// import LogoFooter from "./LogoFooter"

const Footer = () => {
  return (
    <footer className="Footer">
      <Partners className="Footer__partners" />
      <div className="Footer__wrapper">
        <FestivalInfoMarquee />
        {/* <div className="Footer__decor">
          <div className="Footer__left">
            <div className="Footer__logo">
              <LogoFooter />
            </div>
            <p className="Footer__decor-item">
              <FormattedMessage
                id="global.dateAndPlace"
                defaultMessage="10.–14. august, Tøyenparken, Oslo"
              />
            </p>
          </div>
          <div className="Footer__right">
            <StyledNewsletterSignup onDark />
          </div>
        </div> */}
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

// const StyledNewsletterSignup = styled(NewsletterSignup)`
//   max-width: 640px;
//   margin: 0 auto;
// `

export default Footer
