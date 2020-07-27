import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
// Use the following to support legacy browsers like IE11:
// import BackgroundImage from 'gatsby-background-image-es5'

interface HeroWrapperProps {
  className: string
  children: React.ReactChild
}

const HeroWrapper = ({ className, children }: HeroWrapperProps) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bg-2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )

  const imageData = desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      className={`HeroWrapper ${className}`}
      // To style via external CSS see layout.css last examples:
      // className="test"
      fluid={imageData}
      backgroundColor={`#040e18`}
      // Title get's passed to both container and noscriptImg.
      title="synthwave background"
      // style={{
      //   // Defaults are overwrite-able by setting one of the following:
      //   // backgroundSize: '',
      //   // backgroundPosition: '',
      //   // backgroundRepeat: '',
      // }}
      // To "force" the classic fading in of every image (especially on
      // imageData change for fluid / fixed) by setting `soft` on `fadeIn`:
      // fadeIn={`soft`}
      // To be able to use stacking context changing elements yourself,
      // set this to true to disable the "opacity hack":
      // preserveStackingContext={true}
      // You can "safely" (look them up beforehand ; ) add other props:
      id="synthwave"
      role="HeroWrapper"
      aria-label="synthwave background"
    >
      {children}
    </BackgroundImage>
  )
}

export default HeroWrapper
