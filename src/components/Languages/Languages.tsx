import React from "react"
import { Icon as Iconify, InlineIcon as IconifyInline } from "@iconify/react"
import flagForFrance from "@iconify/icons-emojione/flag-for-france"
import flagForUk from "@iconify/icons-emojione/flag-for-united-kingdom"
import flagForPh from "@iconify/icons-emojione/flag-for-philippines"

import "./Languages.scss"

interface LanguagesProps {}

class Languages extends React.Component<LanguagesProps, {}> {
  render() {
    return (
      <section id="Languages" title="Languages" className="Languages block-section">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h2 className="title is-2">Languages</h2>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <div className="columns">
              <div className="column is-4">
                <span className="title is-4">French <IconifyInline icon={flagForFrance}/></span>
                <br />
                <span className="subtitle is-5">Native</span>
              </div>
              <div className="column is-8">
                <progress className="progress is-primary" value="100" max="100">
                  100%
                </progress>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4">
                <span className="title is-4">English <IconifyInline icon={flagForUk}/></span>
                <br />
                <span className="subtitle is-5">Fluent & Professional</span>
              </div>
              <div className="column is-8">
                <progress className="progress is-primary" value="100" max="100">
                  100%
                </progress>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4">
                <span className="title is-4">Tagalog <IconifyInline icon={flagForPh}/></span>
                <br />
                <span className="subtitle is-5">Intermediate</span>
              </div>
              <div className="column is-8">
                <progress className="progress is-warning" value="50" max="100">
                  50%
                </progress>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Languages
