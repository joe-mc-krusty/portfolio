import React from "react"

import { Link } from "react-scroll"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretUp, faDotCircle } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { InlineIcon as Iconify } from "@iconify/react"
import gatsbyIcon from "@iconify/icons-logos/gatsby"
import reactIcon from "@iconify/icons-logos/react"
import netlifyIcon from "@iconify/icons-logos/netlify"
import bulmaIcon from "@iconify/icons-logos/bulma"

import "./Footer.scss"

class Footer extends React.Component {
  render() {
    return (
      <footer id="Footer" title="Footer" className="Footer footer">
        <div className="content has-text-centered">
          <p className="icons">
            <a href="https://www.linkedin.com/in/xavier-sanna/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/xavier_sanna" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://github.com/joe-mc-krusty" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </p>
          
          <p>
            Powered By{" "}
            <a href="https://reactjs.org/" target="_blank">
              <Iconify className="iconify-icon" icon={reactIcon} />
            </a>{" "}
            <a href="https://www.gatsbyjs.com/" target="_blank">
              <Iconify className="iconify-icon" icon={gatsbyIcon} />
            </a>{" "}
            <a href="https://bulma.io/" target="_blank">
              <Iconify className="iconify-icon" icon={bulmaIcon} />
            </a>{" "}
            <a href="https://www.netlify.com/" target="_blank">
              <Iconify className="iconify-icon" icon={netlifyIcon} />
            </a>{" "}
          </p>
          <p>© Copyright {new Date().getFullYear()} Xavier Sanna</p>
        </div>
      </footer>
    )
  }
}

export default Footer
