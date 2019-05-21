import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { AppConsumer } from "./utils"
import cc from "classcat"
import { FormattedMessage } from "react-intl"
import { FeaturedImage } from "./utils"

const Partners = props => {
  const data = useStaticQuery(graphql`
    {
      allWordpressHeyAcfoptions {
        edges {
          node {
            wordpress_id
            locale
            options {
              partners_main {
                wordpress_id
                title {
                  rendered
                }
                acf {
                  external_url
                }
                featured_image {
                  wordpress_id
                  title
                  url
                  alt
                  description
                  caption
                  name
                  mime_type
                  subtype
                  width
                  height
                  sizes {
                    thumbnail
                    thumbnail_width
                    thumbnail_height
                    medium
                    medium_width
                    medium_height
                    medium_large
                    medium_large_width
                    medium_large_height
                    large
                    large_width
                    large_height
                    small
                    small_width
                    small_height
                    medium_small
                    medium_small_width
                    medium_small_height
                    xlarge
                    xlarge_width
                    xlarge_height
                  }
                }
              }
            }
          }
        }
      }
      allWordpressPage(filter: { template: { eq: "partners" } }) {
        edges {
          node {
            title
            locale
            link
          }
        }
      }
    }
  `)

  return (
    <AppConsumer>
      {({ state }) => {
        const { locale } = state

        const partnersPage = data.allWordpressPage.edges.filter(item => {
          return item.node.locale === locale
        })[0].node

        const options = data.allWordpressHeyAcfoptions.edges.filter(item => {
          return item.node.locale === locale
        })[0].node.options

        return (
          <div
            className={cc({
              Partners: true,
              [props.className]: props.className,
            })}
          >
            {options && (
              <ul>
                {options.partners_main.map(partner => {
                  return (
                    <li key={`FooterPartner-${partner.wordpress_id}`}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${
                          partner.title.rendered
                        } is one of the partners`}
                        href={partner.acf.external_url}
                      >
                        <FeaturedImage {...partner.featured_image} />
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
            {partnersPage && (
              <Link to={partnersPage.link}>
                <FormattedMessage
                  id="partners.all"
                  defaultMessage="See all partners"
                />
              </Link>
            )}
          </div>
        )
      }}
    </AppConsumer>
  )
}

export default Partners
