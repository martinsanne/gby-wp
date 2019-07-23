import React from "react"
import BlogPage from "./BlogPage"

const BlogPageContainer = ({ page, ...props }) => {
  const posts = props.latestPosts
  return <BlogPage {...props} posts={posts} page={page} />
}

export default BlogPageContainer
