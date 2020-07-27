import React from "react"
import Image from "../Image"

import "./Works.scss"

interface WorksProps {}

class Works extends React.Component<WorksProps, {}> {
  render() {
    return (
      <section id="Works" title="Works" className="Works block-section">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h2 className="title is-2">Works</h2>
          </div>
        </div>p
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <div className="columns is-multiline">
              <div
                className="column is-3-fullhd is-2-tablet is-1-mobile"
                key={`works-item-0`}
              >
                <div className="card">
                  <div className="card-content">
                    <a href="https://xavier.sanna.dev" target="_blank">
                      <div className="img-container">
                        <Image
                          className=""
                          filename="works/portfolio.jpg"
                          alt="My resume"
                          imgStyle={{}}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="column is-3-fullhd is-2-tablet is-1-mobile"
                key={`works-item-1`}
              >
                <div className="card">
                  <div className="card-content">
                    <a href="https://codecannon.dev" target="_blank">
                      <div className="img-container">
                        <Image
                          className=""
                          filename="works/codecannon.png"
                          alt="My blog"
                          imgStyle={{height: "100px"}}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Works
