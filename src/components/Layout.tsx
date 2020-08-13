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
import Resume from "./Resume/Resume"
import Skills from "./Skills/Skills"
import Languages from "./Languages/Languages"
import skillData from "../data/skills"
import subSkillData from "../data/sub-skills"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"

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
      {children}
      <Navbar hideOffset={200} />
      <HeroWrapper className="hero is-primary is-fullheight">
        <Hero />
      </HeroWrapper>
      <About />
      <Resume />
      <Skills items={skillData} subItems={subSkillData} />
      <Languages />
      <Contact />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
