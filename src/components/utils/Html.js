import React from "react"
const stripHTMLTags = str => str.replace(/<[^>]*>/g, "")

const Html = props => {
  let { stripTags, content } = props
  if (stripTags) {
    content = stripHTMLTags(content)
  }
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default Html
