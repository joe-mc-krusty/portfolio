/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "./Hero/Hero"
import HeroWrapper from "./HeroWrapper/HeroWrapper"
import Navbar from "./Navbar/Navbar"
import About from "./About/About"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar hideOffset={250} />
      <HeroWrapper className="hero is-primary is-fullheight">
        <Hero />
      </HeroWrapper>
      <About />
      <section className="hero is-info is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Large title</h1>
            <h2 className="subtitle">Large subtitle</h2>
          </div>
        </div>
      </section>
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Fullheight title</h1>
            <h2 className="subtitle">Fullheight subtitle</h2>
          </div>
        </div>
      </section>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
