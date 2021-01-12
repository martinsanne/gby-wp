import React, { useContext, useEffect } from "react"
import GreenCopper from "./GreenCopper"
import { VisuallyHidden } from "./utils"
import { AppContext } from "./utils/AppContext"

const GreenCopperPage = ({ page }) => {
  const { actions } = useContext(AppContext)
  const { title } = page
  useEffect(() => {
    actions.setHideSpider(true)
  }, [])
  return (
    <article>
      <VisuallyHidden as="header">
        <h1>{title}</h1>
      </VisuallyHidden>
      <GreenCopper />
    </article>
  )
}

export default GreenCopperPage
