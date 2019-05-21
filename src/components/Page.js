import React from "react"
import { FeaturedImage, Html, ResponsiveEmbeds } from "./utils"

const Page = ({ page }) => {
  const { title, content, featured_image } = page
  return (
    <article className="Page">
      {title && (
        <header className="Page__header">
          <h1 className="Page__title">
            <Html content={title} />
          </h1>
        </header>
      )}
      {featured_image && (
        <FeaturedImage
          className="Page__featured-image"
          {...featured_image}
          showCaption={true}
        />
      )}
      <div className="Page__content">
        <ResponsiveEmbeds>
          <Html content={content} />
        </ResponsiveEmbeds>
      </div>
    </article>
  )
}

export default Page
