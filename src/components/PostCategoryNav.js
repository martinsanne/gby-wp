import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { AppConsumer } from "./utils"
import { getCategoryLink } from "../../config/site"
import YearSelect from "./YearSelect"
import { FormattedMessage } from "react-intl"

const PostCategoryNav = ({ year, page }) => {
  const data = useStaticQuery(graphql`
    {
      allWordpressHeyCategories {
        edges {
          node {
            name
            slug
            term_id
            locale
            count
          }
        }
      }
    }
  `)

  return (
    <AppConsumer>
      {ctx => {
        const { locale } = ctx.state
        const cats = data.allWordpressHeyCategories.edges
          .filter(edge => edge.node.locale === locale)
          .map(edge => edge.node)
        return (
          <ul className="PostCategoryNav">
            <li className="PostCategoryNav__item">
              <Link
                className="PostCategoryNav__link"
                activeClassName="PostCategoryNav__link--active"
                to={page.link}
              >
                <FormattedMessage id="categories.all" defaultMessage="Latest" />
              </Link>
            </li>
            {cats.map(cat => {
              return (
                <li
                  key={`CategoryLink-${cat.term_id}`}
                  className="PostCategoryNav__item"
                >
                  <Link
                    className="PostCategoryNav__link"
                    activeClassName="PostCategoryNav__link--active"
                    to={getCategoryLink(cat.locale, cat.slug)}
                  >
                    {cat.name}
                  </Link>
                </li>
              )
            })}
            <li className="PostCategoryNav__item">
              <YearSelect year={year} locale={locale} page={page} />
            </li>
          </ul>
        )
      }}
    </AppConsumer>
  )
}

export default PostCategoryNav
