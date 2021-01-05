import React from "react"
import Grid from "styled-components-grid"

import { Html } from "./utils/"
import NewsCard from "./NewsCard"
import PostCategoryNav from "./PostCategoryNav"

const BlogPage = ({ posts, page, year }) => {
  const { title, content } = page
  return (
    <article className="BlogPage">
      <header className="BlogPage__header">
        <h1 className="BlogPage__title">
          <Html content={title} />
        </h1>
        {content && (
          <div className="BlogPage__intro">
            <Html content={content} />
          </div>
        )}
        <div className="BlogPage__nav">
          <PostCategoryNav year={year} page={page} />
        </div>
      </header>
      <div className="BlogPage__content">
        <Grid className="Grid NewsCards">
          {posts.map(post => (
            <Grid.Unit
              className="Grid__item"
              size={{ sm: 1 / 2, lg: 1 / 3 }}
              key={`NewsCard-${post.wordpress_id}`}
            >
              <NewsCard post={post} />
            </Grid.Unit>
          ))}
        </Grid>
      </div>
    </article>
  )
}

export default BlogPage
