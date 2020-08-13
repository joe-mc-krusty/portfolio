import React from "react"
import { Link } from "react-scroll"

import ParticlesBg from "./ParticlesBg/ParticlesBg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import Image from "../Image"
import "./Hero.scss"

interface HeroState {}

interface HeroProps {}

class Hero extends React.Component<HeroProps, HeroState> {
  render() {
    return (
      <>
        <div className="hero-body">
          <div className="container has-text-centered">
            {/* <Image
              className="avatar-pic image is-rounded is-inline-block"
              filename="xsanna-crop.png"
              alt="Avatar"
              imgStyle={{
                width: "128px",
                height: "128px",
              }}
            /> */}
            <h1 className="title is-1">Hi, I'm Xavier Sanna.</h1>
            <h2 className="subtitle is-5">
              Passionate developer & devops enthusiast based in France. <br /><span className="is-hidden-mobile">I
              speak React, Angular, NodeJS, PHP, Python, Linux, Docker &
              Ansible.</span>
            </h2>
            <ul className="icons-list is-inline-block">
              <li className="is-inline-block">
                <a
                  href="https://www.linkedin.com/in/xavier-sanna/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li className="is-inline-block">
                <a href="https://twitter.com/xavier_sanna" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              <li className="is-inline-block">
                <a href="https://github.com/joe-mc-krusty" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero-foot">
          <div className="container has-text-centered">
            <Link
              to="About"
              smooth={true}
              duration={1200}
              offset={1}
              className="scroll-button"
            >
              <button className="button">
                <span className="icon is-small">
                  <FontAwesomeIcon
                    className="scroll-bottom-icon"
                    fixedWidth
                    icon={faCaretDown}
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <ParticlesBg />
      </>
    )
  }
}

export default Hero
