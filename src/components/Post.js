import React from "react"
import { Html, FeaturedImage, PostDate, ResponsiveEmbeds } from "./utils"
import NewsCard from "./NewsCard"

const Post = ({ post, posts }) => {
  const { title, wordpress_id, content, featured_image, date, excerpt } = post

  return (
    <article className="Post">
      {title && (
        <header className="Post__header">
          <h1 className="Post__title">
            <Html content={title} />
          </h1>
          {date && (
            <p className="Post__date">
              <PostDate date={date} />
            </p>
          )}
          {excerpt && (
            <div className="Post__lead">
              <Html content={excerpt} />
            </div>
          )}
        </header>
      )}
      {featured_image && (
        <FeaturedImage
          className="Post__featured-image"
          {...featured_image}
          showCaption={true}
        />
      )}
      <div className="Post__content">
        <ResponsiveEmbeds>
          <Html content={content} />
        </ResponsiveEmbeds>
      </div>
      <footer className="Post__footer">
        <div className="NewsCards NewsCards--footer">
          {posts &&
            posts
              .filter(post => post.wordpress_id !== wordpress_id)
              .slice(0, 4)
              .map(post => (
                <NewsCard key={`NewsCard-${post.wordpress_id}`} post={post} />
              ))}
        </div>
      </footer>
    </article>
  )
}

export default Post
