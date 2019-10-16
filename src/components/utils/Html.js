import React from "react"
const stripHTMLTags = str => str.replace(/<[^>]*>/g, "")
const stripStyleTags = str => str.replace(/style=('|")(.)*"/g, "")

const Html = ({ stripTags, content, ...props }) => {
  if (stripTags) {
    content = stripHTMLTags(content)
  }
  return (
    <div
      {...props}
      dangerouslySetInnerHTML={{ __html: stripStyleTags(content) }}
    />
  )
}

export default Html
