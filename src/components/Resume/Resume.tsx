import React from "react"

import Image from "../Image"

import "./Resume.scss"

interface ResumeProps {}
interface ResumeState {}

class Resume extends React.Component<ResumeProps, ResumeState> {
  render() {
    return (
      <section id="Resume" title="Resume" className="Resume py-6">
        <div className="container">
          <div className="columns">
            <div className="column is-two-fourth is-offset-one-fourth">
              <div className="columns">
                
                <div className="column">
                <Image
                  filename="about-pic.png"
                  alt="CodeCannon Logo"
                  className="logo"
                  imgStyle={{
                    width: "50%"
                  }}
                />
                </div>
                <div className="column">
                  <h2 className="title is-2">Resume</h2>
                </div>
              </div>
                
        
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume
