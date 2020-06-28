import React from "react"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
import "./Hero.scss"
import ParticlesBg from "./ParticlesBg/ParticlesBg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

interface HeroState {}

interface HeroProps {}

class Hero extends React.Component<HeroProps, HeroState> {
  render() {
    return (
      <>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">Hi, I'm Xavier Sanna.</h1>
            <h2 className="subtitle is-5">
              Passionate developer & devops enthusiast based in France.
            </h2>
          </div>
        </div>

        <div className="hero-foot">
          <div className="container has-text-centered">
            <Link to="About" smooth={true} duration={1200} offset={1}>
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
