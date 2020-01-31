import React from "react"
const stripHTMLTags = str => str.replace(/<[^>]*>/g, "")
const stripStyleTags = str => str.replace(/style=('|")(.)*"/g, "")

const Html = ({ stripTags, content, El = "div", ...props }) => {
  if (stripTags) {
    content = stripHTMLTags(content)
  }
  return (
    <El
      {...props}
      dangerouslySetInnerHTML={{ __html: stripStyleTags(content) }}
    />
  )
}

export default Html
