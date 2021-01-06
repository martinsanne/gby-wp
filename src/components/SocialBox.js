import React from "react"
import styled, { css } from "styled-components"
import Grid from "styled-components-grid"
import NewsletterSignup from "./NewsletterSignup"
import { useStaticQuery, graphql } from "gatsby"
import { createSocialLinksFromYOAST } from "../utils/wpHelpers"
import { Icon } from "./utils"

const musicLinks = [
  // {
  //   url:
  //     "https://tidal.com/browse/playlist/53b5cf66-0969-4cd4-80a5-22fbf74da119",
  //   title: "Podcaster",
  //   icon: "podcast",
  // },
  {
    url: "https://open.spotify.com/user/%C3%B8yafestivalen",
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

const LinkColumn = ({ links }) => {
  return (
    <Grid.Unit className="Grid__item" size={{ xs: 1 / 2 }}>
      {links && (
        <ul>
          {links.map(item => {
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
    </Grid.Unit>
  )
}

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
  const socialLinks = createSocialLinksFromYOAST(settings.wpseo.social)

  return (
    <Wrapper>
      <Block>
        <h4 className="SocialBox__title">Følg Øyafestivalen</h4>
        <Grid className="Grid">
          <LinkColumn links={socialLinks} />
          <LinkColumn links={musicLinks} />
        </Grid>
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
