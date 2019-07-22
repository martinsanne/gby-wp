import React from "react"
import { graphql, useStaticQuery } from "gatsby"

/**
 * Page templates
 */
import FrontPage from "../components/FrontPage"
import Page from "../components/Page"
import GreenCopper from "../components/GreenCopper"
import PartnerPageContainer from "../components/PartnerPageContainer"
import GalleryPageContainer from "../components/GalleryPageContainer"
import BlogPageContainer from "../components/BlogPageContainer"

const pageTemplates = {
  homepage: FrontPage,
  greencopper: GreenCopper,
  partners: PartnerPageContainer,
  gallery: GalleryPageContainer,
  blog: BlogPageContainer,
  default: Page,
}

const resolvePageTemplate = name => {
  if (pageTemplates[name]) {
    return pageTemplates[name]
  }
  return pageTemplates.default
}

export default ({ page, locale }) => {
  const data = useStaticQuery(graphql`
    {
      allWordpressHeySettings {
        edges {
          node {
            locale
            page_for_posts {
              wordpress_id
            }
          }
        }
      }
    }
  `)

  let pageForPost = data.allWordpressHeySettings.edges.filter(item => {
    return item.node.locale === locale
  })

  if (pageForPost && pageForPost[0] && pageForPost[0].node) {
    pageForPost = pageForPost[0].node.page_for_posts
    if (pageForPost.wordpress_id === page.wordpress_id) {
      page.template = "blog"
    }
  }

  const MyTmpl = resolvePageTemplate(page.template)
  return <MyTmpl page={page} />
}
