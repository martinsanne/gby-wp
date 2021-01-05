import React from "react"
import styled, { css } from "styled-components"
import NewsletterSignup from "./NewsletterSignup"
import { useStaticQuery, graphql } from "gatsby"
import { createSocialLinksFromYOAST } from "../utils/wpHelpers"
import { Icon } from "./utils"

const extraSocialLinks = [
  // {
  //   url:
  //     "https://tidal.com/browse/playlist/53b5cf66-0969-4cd4-80a5-22fbf74da119",
  //   title: "Podcaster",
  //   icon: "podcast",
  // },
  {
    url:
      "https://open.spotify.com/playlist/3KBJl061Xg5pd0wTp2K7ST?si=m702XjobSeqGOKfhqWqTwg",
    title: "Spotify",
    icon: "spotify",
  },
  {
    url:
      "https://tidal.com/browse/playlist/53b5cf66-0969-4cd4-80a5-22fbf74da119",
    title: "Tidal",
    icon: "tidal",
  },
]

const SocialBox = () => {
  const data = useStaticQuery(graphql`
    {
      wordpressHeySettings {
        wpseo {
          social {
            facebook_site
            instagram_url
            linkedin_url
            twitter_site
            myspace_url
            pinterest_url
            youtube_url
          }
        }
      }
    }
  `)

  const settings = data.wordpressHeySettings
  const yoastSocialLinks = createSocialLinksFromYOAST(settings.wpseo.social)
  const socialLinks = [...yoastSocialLinks, ...extraSocialLinks]

  return (
    <Wrapper>
      <Block>
        <h3 className="SocialBox__title">Følg Øyafestivalen</h3>
        {socialLinks && (
          <ul>
            {socialLinks.map(item => {
              return (
                <li key={`SocialLink-${item.icon}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
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
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </Block>
      <NewsletterForm />
    </Wrapper>
  )
}

const pad = "15px"

const NewsletterForm = styled(NewsletterSignup)(
  ({ theme }) => css`
    border-top: 2px solid white;
    .NewsletterSignup__title {
      padding: ${pad};
      margin-bottom: 0.25em;
      padding-bottom: 0;
    }
    .NewsletterSignup__desc {
      padding-left: ${pad};
      padding-right: ${pad};
      font-family: ${theme.fontFamily.serif};
    }
    .Form__status {
      padding: ${pad};
    }
    .Form__label--checkbox {
      padding-left: ${pad};
      padding-right: ${pad};
    }
    .Form__inputs {
      margin-left: -2px;
      margin-right: -2px;
      margin-bottom: -2px;
    }
  `
)

const Block = styled.div`
  padding: ${pad};
  border-bottom: 0;
`

const Wrapper = styled.div(
  ({ theme }) => css`
    margin-bottom: 30px;
    border: 2px solid white;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    .SocialBox__title {
      margin-bottom: 0.25em;
    }
    ul {
      justify-content: flex-start;
      display: flex;
      flex-wrap: wrap;
      font-family: ${theme.fontFamily.serif};
      li {
        flex: 0 0 50%;
        margin-top: 0.25em;
        .Social__item {
          display: flex;
          align-items: center;
        }
        .Social__icon {
          margin-right: 0.5em;
        }
      }
    }
  `
)

export default SocialBox
