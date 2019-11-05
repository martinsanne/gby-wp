import React, { Component } from "react"
import { Link } from "gatsby"
import cc from "classcat"
import { isBrowser } from "../utils/helpers"

import {
  FeaturedImageAspect,
  Overlay,
  PostDate,
  Html,
  Illustration,
} from "./utils"

export default class NewsCard extends Component {
  render() {
    const { post, i } = this.props
    return (
      <Link to={post.link} className="NewsCards__item">
        {post.featured_image ? (
          <div className="NewsCards__image">
            <Overlay i={i}>
              <FeaturedImageAspect
                key={post.id}
                {...post.featured_image}
                className="aspect-sm--landscape"
                maxWidth={1000}
              />
            </Overlay>
            {isBrowser && Math.random() < 0.35 && (
              <Illustration
                className={cc({
                  NewsCards__illustration: true,
                  "NewsCards__illustration--right": Math.random() > 0.25,
                })}
                src="random"
              />
            )}
          </div>
        ) : (
          <div className="NewsCards__placeholder aspect aspect-sm--landscape" />
        )}
        <div className="NewsCards__content">
          <small>
            <PostDate className="NewsCards__date" date={post.date} />
          </small>
          <h3 className="NewsCards__title">
            <Html
              stripTags={true}
              content={post.title.rendered || post.title} // client rendering needs post.title.rendered (See: LatestPosts.js)
            />
          </h3>
          {/* <div className="NewsCards__excerpt">
              <Html stripTags={true} content={post.excerpt} />
            </div> */}
        </div>
      </Link>
    )
  }
}
