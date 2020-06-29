import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import React from "react"
import { Style } from "util"

interface ImageProps {
  filename: string
  alt: string
  style?: object | undefined
  imgStyle?: object | undefined
  className?: string | object | undefined
  size?: string | undefined
  Tag?: string | undefined
  fadeIn?: boolean | undefined
}

export default (props: ImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find((n: any) => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.sizes
      return (
        <Img
          Tag={props.Tag}
          alt={props.alt}
          sizes={imageSizes}
          style={props.style}
          imgStyle={props.imgStyle}
          className={props.className}
          fadeIn={props.fadeIn}
        />
      )
    }}
  />
)
