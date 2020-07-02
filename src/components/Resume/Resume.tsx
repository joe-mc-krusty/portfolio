import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJsSquare,
  faPhp,
  faMagento,
  faWordpress,
  faSymfony,
  faPython,
  faLinux,
} from "@fortawesome/free-brands-svg-icons"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import Image from "../Image"

import "./Resume.scss"

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
            <h3 className="subtitle is-3">Work</h3>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Dec 2018 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={[
                  <FontAwesomeIcon icon={faJsSquare} />,
                  <FontAwesomeIcon icon={faPhp} />,
                  <FontAwesomeIcon icon={faPython} />,
                  <FontAwesomeIcon icon={faLinux} />,
                ]}
              >
                <h3 className="vertical-timeline-element-title">
                  Fullstack Developer / Devops
                </h3>
                <h4 className="vertical-timeline-element-subtitle subtitle">
                  Tremblay-en-France, France
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2017 - July 2018"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={[
                  <FontAwesomeIcon icon={faMagento} />,
                  <FontAwesomeIcon icon={faJsSquare} />,
                ]}
              >
                <h3 className="vertical-timeline-element-title">
                  Magento Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Roissy-en-France, France
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO,
                  Online Marketing
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={[
                  <FontAwesomeIcon icon={faWordpress} />,
                ]}
              >
                <h3 className="vertical-timeline-element-title">
                  Wordpress Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Manila, Philippines (remote)
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={[
                  <FontAwesomeIcon icon={faSymfony} />,
                ]}
              >
                <h3 className="vertical-timeline-element-title">
                  Symfony developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Tagaytay, Philippines
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={
                  <Image
                    className="avatar-pic image is-rounded is-inline-block"
                    filename="xsanna-crop.png"
                    alt="Avatar"
                    imgStyle={{
                      width: "128px",
                      height: "128px",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  Content Marketing for Web, Mobile and Social Media
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Online Course
                </h4>
                <p>Strategy, Social Media</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={
                  <Image
                    className="avatar-pic image is-rounded is-inline-block"
                    filename="xsanna-crop.png"
                    alt="Avatar"
                    imgStyle={{
                      width: "128px",
                      height: "128px",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  Agile Development Scrum Master
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Certification
                </h4>
                <p>Creative Direction, User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={
                  <Image
                    className="avatar-pic image is-rounded is-inline-block"
                    filename="xsanna-crop.png"
                    alt="Avatar"
                    imgStyle={{
                      width: "128px",
                      height: "128px",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  Bachelor of Science in Interactive Digital Media Visual
                  Imaging
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Bachelor Degree
                </h4>
                <p>Creative Direction, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={
                  <Image
                    className="avatar-pic image is-rounded is-inline-block"
                    filename="xsanna-crop.png"
                    alt="Avatar"
                    imgStyle={{
                      width: "128px",
                      height: "128px",
                    }}
                  />
                }
              />
            </VerticalTimeline>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume
