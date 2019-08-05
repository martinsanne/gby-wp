import React from "react"
import { Html, FeaturedImage, PostDate, ResponsiveEmbeds } from "./utils"
import LatestPosts from "./LatestPosts"

const Post = ({ post }) => {
  const { title, content, wordpress_id, featured_image, date, excerpt } = post

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
      <div className="Post__content editor">
        <ResponsiveEmbeds>
          <Html content={content} />
        </ResponsiveEmbeds>
      </div>
      <footer className="Post__footer">
        <div className="NewsCards NewsCards--footer">
          {typeof window !== "undefined" && (
            <LatestPosts wordpress_id={wordpress_id} />
          )}
        </div>
      </footer>
    </article>
  )
}

export default Post
