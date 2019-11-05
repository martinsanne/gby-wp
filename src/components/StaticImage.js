import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*

Usage:

<StaticImage src="photo-skate-girl.jpg" />

<StaticImage src="photo-skate-girl.jpg" aspect="portrait">
  {({ image }) =>
    image &&
    image.fluid && <Figure fluid={image.fluid} alt="Skater girl" />
  }
</StaticImage>

*/

export default function StaticImage({ src, aspect, className, children }) {
  const data = useStaticQuery(query)
  let image

  if (src) {
    image = data.allFile.edges.filter(item => {
      return item.node.relativePath === src
    })
  }

  if (image && image[0] && image[0].node) {
    const img =
      aspect && image[0].node[aspect]
        ? image[0].node[aspect]
        : image[0].node.default
    if (children) {
      return children({ image: img })
    } else {
      return <Img fluid={img.fluid} alt="" />
    }
  } else {
    console.warn(`Could not find static image ${src}`)
    return null
  }
}

const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          default: childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
