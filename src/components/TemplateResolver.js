import React from "react"
import { graphql, useStaticQuery } from "gatsby"

/**
 * Page templates
 */
import FrontPage from "../components/FrontPage"
import Page from "../components/Page"
import GreenCopperPage from "../components/GreenCopperPage"
import PartnerPageContainer from "../components/PartnerPageContainer"
import GalleryPageContainer from "../components/GalleryPageContainer"
import BlogPageContainer from "../components/BlogPageContainer"
import AreaMapContainer from "../components/AreaMapContainer"

const pageTemplates = {
  homepage: FrontPage,
  greencopper: GreenCopperPage,
  partners: PartnerPageContainer,
  gallery: GalleryPageContainer,
  blog: BlogPageContainer,
  map: AreaMapContainer,
  default: Page,
}

const resolvePageTemplate = name => {
  if (pageTemplates[name]) {
    return pageTemplates[name]
  }
  return pageTemplates.default
}

export default ({ page, locale, latestPosts, location }) => {
  const data = useStaticQuery(graphql`
    query {
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
  return <MyTmpl latestPosts={latestPosts} page={page} location={location} />
}
