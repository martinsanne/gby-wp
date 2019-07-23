import React from "react"
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
        <div className="NewsCards">
          {posts.map((post, i) => (
            <NewsCard key={`NewsCard-${post.wordpress_id}`} post={post} i={i} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default BlogPage
