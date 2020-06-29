import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Image from "../Image"

import "./About.scss"

interface AboutProps {}
interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {
  render() {
    return (
      <section id="About" title="About" className="About">
        <div className="columns">
          <div className="column is-2 is-offset-3">
            <Image
              className="about-pic"
              filename="about-pic.png"
              alt="About picture"
              imgStyle={{
                height: "450px",
              }}
            />
          </div>
          <div className="column is-2"></div>
        </div>
      </section>
    )
  }
}

export default About
