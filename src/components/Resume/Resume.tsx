import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSuitcase,
  faMapMarkerAlt,
  faBuilding,
  faServer,
  faCode,
  faUser,
  faPlane,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import Image from "../Image"

import "./Resume.scss"
import {
  faPhp,
  faJs,
  faLinux,
  faPython,
  faDocker,
  faAngular,
  faGitlab,
  faNodeJs,
  faMagento,
  faGulp,
  faConfluence,
  faWordpress,
  faBootstrap,
  faSymfony,
} from "@fortawesome/free-brands-svg-icons"

interface ResumeProps {}
interface ResumeState {}

class Resume extends React.Component<ResumeProps, ResumeState> {
  render() {
    return (
      <section id="Resume" title="Resume" className="Resume">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h2 className="title is-2">Resume</h2>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h3 className="subtitle is-3">Work & Education</h3>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Dec 2018 - Present"
                iconStyle={{ background: "#5d91b2", color: "#fff" }}
                icon={[<FontAwesomeIcon fixedWidth icon={faSuitcase} />]}
              >
                <div className="card header-card color-blue">
                  <div className="card-content">
                    <p className="title is-5 is-spaced">
                      Fullstack Dev & Devops
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faBuilding} /> Waynium
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />{" "}
                      Tremblay-en-France, France
                    </p>
                  </div>
                </div>

                <div className="card skills-card color-blue">
                  <div className="card-content">
                    <ul>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faPhp} /> PHP backend
                        development (company framework based on Zend).
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faJs} /> Vanilla JS
                        frontend development.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faAngular} /> Mobile
                        application development with Ionic 5 & Angular 8/9.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faLinux} />{" "}
                        Infrastructure automation and deployments with Ansible.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faPython} /> CLI tools
                        development with Python.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faGitlab} /> CI/CD
                        with Gitlab CI.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faDocker} />{" "}
                        Application deployment with Docker.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faNodeJs} /> Backend
                        development with NodeJS (NestJS framework).
                      </li>
                    </ul>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2017 - July 2018"
                iconStyle={{ background: "#5d91b2", color: "#fff" }}
                icon={[<FontAwesomeIcon fixedWidth icon={faSuitcase} />]}
              >
                <div className="card header-card color-blue">
                  <div className="card-content">
                    <p className="title is-5 is-spaced">
                      PHP Magento Developer
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faBuilding} /> Hotels at
                      Home
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />{" "}
                      Roissy-en-France, France
                    </p>
                  </div>
                </div>

                <div className="card skills-card color-blue">
                  <div className="card-content">
                    <ul>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faMagento} /> Magento
                        multisite backend development & maintenance.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faGulp} /> Development
                        of various tools & libs with Gulp.
                        <br /> They were integrated in Magento frontend
                        development workflow.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faJs} /> Multiple
                        E-commerce websites frontend development & maintenance.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faServer} />{" "}
                        Load-balanced frontend LAMP servers maintenance.
                      </li>

                      <li>
                        <FontAwesomeIcon fixedWidth icon={faConfluence} />{" "}
                        Technical documentation written in both French & English
                        with Confluence.
                      </li>
                    </ul>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Dec 2016 to Apr 2017"
                iconStyle={{ background: "#5d91b2", color: "#fff" }}
                icon={[<FontAwesomeIcon fixedWidth icon={faSuitcase} />]}
              >
                <div className="card header-card color-blue">
                  <div className="card-content">
                    <p className="title is-5 is-spaced">
                      PHP Wordpress Developer
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faBuilding} /> E-Dublin
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />{" "}
                      Manila, Philippines (remote)
                    </p>
                  </div>
                </div>

                <div className="card skills-card color-blue">
                  <div className="card-content">
                    <ul>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faWordpress} />{" "}
                        Maintaining & improving existing wordpress application
                        (backend apps & frontend).
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faBootstrap} />{" "}
                        HTML/CSS integration with Bootstrap.
                      </li>
                    </ul>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jun 2016 to Dec 2016"
                iconStyle={{ background: "#5d91b2", color: "#fff" }}
                icon={[<FontAwesomeIcon fixedWidth icon={faSuitcase} />]}
              >
                <div className="card header-card color-blue">
                  <div className="card-content">
                    <p className="title is-5 is-spaced">Symfony 3 Developer</p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faBuilding} /> Towertech
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />{" "}
                      Tagaytay, Philippines (remote)
                    </p>
                  </div>
                </div>

                <div className="card skills-card color-blue">
                  <div className="card-content">
                    <ul>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faSymfony} /> Company
                        management tools & e-commerce solution development on
                        Symfony 3.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faBootstrap} />{" "}
                        HTML/CSS integration with Bootstrap.
                      </li>
                    </ul>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan 2014 to June 2016"
                iconStyle={{ background: "#C56BC6", color: "#fff" }}
                icon={[<FontAwesomeIcon fixedWidth icon={faPlane} />]}
              >
                <div className="card header-card color-purple">
                  <div className="card-content">
                    <p className="title is-5 is-spaced">
                      Expatriation in The Philippines
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faBuilding} /> Myself
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />{" "}
                      Philippines
                    </p>
                  </div>
                </div>

                <div className="card skills-card color-purple">
                  <div className="card-content">
                    <ul>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faGraduationCap} />{" "}
                        Self-teaching web development.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faPhp} /> Working on a
                        few freelance missions to practice.
                      </li>
                    </ul>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sep 2013 to Dec 2013"
                iconStyle={{ background: "#5d91b2", color: "#fff" }}
                icon={[<FontAwesomeIcon fixedWidth icon={faSuitcase} />]}
              >
                <div className="card header-card color-blue">
                  <div className="card-content">
                    <p className="title is-5 is-spaced">
                      PHP Developer Internship
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faBuilding} /> General
                      Web
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />{" "}
                      Paris, France
                    </p>
                  </div>
                </div>

                <div className="card skills-card color-blue">
                  <div className="card-content">
                    <ul>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faPhp} /> PHP
                        development on WHMCS.
                      </li>
                    </ul>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Nov 2011 to Sep 2013"
                iconStyle={{ background: "#5d91b2", color: "#fff" }}
                icon={[<FontAwesomeIcon fixedWidth icon={faSuitcase} />]}
              >
                <div className="card header-card color-blue">
                  <div className="card-content">
                    <p className="title is-5 is-spaced">
                      IT Manager Assistant (Cooperative education)
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faBuilding} /> CCL Label
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />{" "}
                      Moussy-Le-Neuf, France
                    </p>
                  </div>
                </div>

                <div className="card skills-card color-blue">
                  <div className="card-content">
                    <ul>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faCode} /> Development
                        of production monitoring & users tools (VB.NET).
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faServer} /> Company
                        network & IT stock management.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faUser} /> On-site
                        user support.
                      </li>
                    </ul>
                  </div>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Oct 2011 to Jun 2013"
                iconStyle={{ background: "#C56BC6", color: "#fff" }}
                icon={[<FontAwesomeIcon fixedWidth icon={faGraduationCap} />]}
              >
                <div className="card header-card color-purple">
                  <div className="card-content">
                    <p className="title is-5 is-spaced">BTS SIO (SLAM)</p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faBuilding} /> ETS IRIS
                    </p>
                    <p className="subtitle is-6">
                      <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />{" "}
                      Paris, France
                    </p>
                  </div>
                </div>

                <div className="card skills-card color-purple">
                  <div className="card-content">
                    <ul>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faCode} /> Learning
                        the basics & essentials of coding.
                      </li>
                      <li>
                        <FontAwesomeIcon fixedWidth icon={faServer} /> Learning
                        the basics & essentials of networking.
                      </li>
                    </ul>
                  </div>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume
