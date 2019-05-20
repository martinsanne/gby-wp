import React from "react"

export default ({ page }) => {
  return (
    <div>
      <p>Page:</p>
      <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      <pre>{JSON.stringify(page, null, 2)}</pre>
    </div>
  )
}
