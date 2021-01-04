import React from "react"
import { Html, FeaturedImage, PostDate, ResponsiveEmbeds } from "./utils"
import LatestPosts from "./LatestPosts"
import { FormattedMessage } from "react-intl"
import { isBrowser } from "../utils/helpers"

const Post = ({ post }) => {
  const { title, content, wordpress_id, featured_image, date, excerpt } = post

  return (
    <article className="Post">
      {title && (
        <header className="Post__header">
          <h1 className="Post__title">
            <Html content={title} />
          </h1>
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
      {date && (
        <p className="Post__date">
          <FormattedMessage id="post.datePrefix" defaultMessage="Publisert" />
          &nbsp;
          <PostDate date={date} />
        </p>
      )}
      <div className="Post__content editor">
        <ResponsiveEmbeds>
          <Html content={content} />
        </ResponsiveEmbeds>
      </div>
      <footer className="Post__footer">
        {isBrowser && <LatestPosts wordpress_id={wordpress_id} />}
      </footer>
    </article>
  )
}

export default Post
