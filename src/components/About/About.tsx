import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Image from "../Image"

import "./About.scss"

interface AboutProps {}
interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {
  render() {
    return (
      <section id="About" title="About" className="About block-section">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h2 className="title is-2">About me</h2>
            <Image
              className="about-pic"
              filename="about-pic.png"
              alt="About picture"
              imgStyle={{}}
            />

            <p className="content">
              I started my dev adventure as a <strong>PHP</strong> developer and
              have worked on quite a few frameworks and CMSs, notably{" "}
              <strong>Symfony</strong>,<strong>Wordpress</strong> &{" "}
              <strong>Magento</strong>.
            </p>
            <p className="content">
              <strong>Javascript</strong> has always been part of my tech stack
              and took over time a larger place, to the point where it became
              the main language I now use on my job and personal projects. I've
              been working on both frontend and backend with the following
              frameworks: <strong>React</strong>, <strong>Angular</strong>,{" "}
              <strong>NestJS (node)</strong>
            </p>
            <p className="content">
              I like to automate everyhting I touch & being a Unix systems
              enthusiast, I naturally made my way into system administration and
              automation. <strong>Docker</strong> & <strong>Ansible</strong> are
              now my daily companions. When developing CLI tools and various
              system scripts, <strong>Python</strong> is my partner of choice.
            </p>
            <p className="content">
              Based in France but have no issue working 100% remote, as
              I'm familiar with most commonly used collaboration tools:{" "}
              <strong>Slack</strong>, <strong>Microsoft Teams</strong>,{" "}
              <strong>CodeStream</strong>, <strong>Github</strong>,{" "}
              <strong>Gitlab</strong>,{" "}
              <strong>Atlassian Suite (Jira, Confluence)</strong>,{" "}
              <strong>Clockify</strong>, <strong>Harvest</strong>. To name a
              few.
            </p>
            <p className="content">
              Formerly expatriated in the Philippines for several years, I'm now
              living back in my home country and a proud dad of 3. When not coding I like spending time with my kids, reading & learning about
              new techs, learning foreign languages & playing music instruments.
            </p>
            <p>Arch linux is my daily driver. I use Arch btw.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default About
