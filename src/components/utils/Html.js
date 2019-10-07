import React from "react"
const stripHTMLTags = str => str.replace(/<[^>]*>/g, "")
const stripStyleTags = str => str.replace(/style=('|")(.)*"/g, "")

const Html = props => {
  let { stripTags, content } = props
  if (stripTags) {
    content = stripHTMLTags(content)
  }
  return <div dangerouslySetInnerHTML={{ __html: stripStyleTags(content) }} />
}

export default Html
