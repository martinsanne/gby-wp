import React, { Component } from "react"
import { Link } from "gatsby"

import { FeaturedImageAspect, Overlay, PostDate, Html, Doodle } from "./utils"

export default class NewsCard extends Component {
  render() {
    const { post, i } = this.props
    return (
      <Link to={post.link} className="NewsCards__item">
        <Doodle>
          {post.featured_image ? (
            <div className="NewsCards__image">
              <Overlay i={i}>
                <FeaturedImageAspect
                  {...post.featured_image}
                  className="aspect-sm--landscape"
                  maxWidth={1000}
                />
              </Overlay>
            </div>
          ) : (
            <div className="NewsCards__placeholder aspect aspect-sm--landscape" />
          )}
          <div className="NewsCards__content">
            <small>
              <PostDate className="NewsCards__date" date={post.date} />
            </small>
            <h3 className="NewsCards__title">
              <Html stripTags={true} content={post.title} />
            </h3>
            {/* <div className="NewsCards__excerpt">
              <Html stripTags={true} content={post.excerpt} />
            </div> */}
          </div>
        </Doodle>
      </Link>
    )
  }
}
