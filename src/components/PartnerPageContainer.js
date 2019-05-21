import React from "react"
import cc from "classcat"
import { useStaticQuery, graphql } from "gatsby"

import { Html } from "../components/utils"
import { FeaturedImage } from "../components/utils"

const PartnerPageContainer = ({ page }) => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpPartnerCat {
        nodes {
          name
          wordpress_id
        }
      }
      allWordpressWpPartner {
        nodes {
          title
          partner_cat
          content
          wordpress_id
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
  `)

  const terms = data.allWordpressWpPartnerCat.nodes
  const partners = data.allWordpressWpPartner.nodes

  const partnersSorted = [...terms]
  /**
   * Add partners to their respective category
   */
  partnersSorted.reduce((acc, term) => {
    term.children = partners.filter(
      p => p.partner_cat.indexOf(term.wordpress_id) !== -1
    )
    acc.push(term)
    return acc
  }, [])

  const items = partnersSorted
  const { title } = page
  return (
    <article className="Page">
      {title && (
        <header className="Page__header">
          <h1 className="Page__title">
            <Html content={title} />
          </h1>
        </header>
      )}
      {items &&
        items.map((term, i) => {
          return (
            <div
              className={cc({
                PartnerSection: true,
                "PartnerSection--main": i === 0,
              })}
              key={`PartnerSection-${term.wordpress_id}`}
            >
              <h2 className="PartnerSection__heading">{term.name}</h2>
              <ul className="PartnerSection__list">
                {term.children &&
                  term.children.map(partner => {
                    return (
                      <li
                        key={`Partner-${partner.wordpress_id}`}
                        className="PartnerSection__item"
                      >
                        <div className="PartnerSection__image">
                          {partner.acf.external_url ? (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={partner.acf.external_url}
                            >
                              <FeaturedImage {...partner.featured_image} />
                            </a>
                          ) : (
                            <FeaturedImage {...partner.featured_image} />
                          )}
                        </div>
                        <div className="PartnerSection__card">
                          <h3 className="PartnerSection__title">
                            <Html content={partner.title} />
                          </h3>
                          <div>
                            <Html content={partner.content} />
                          </div>
                        </div>
                      </li>
                    )
                  })}
              </ul>
            </div>
          )
        })}
    </article>
  )
}

export default PartnerPageContainer
