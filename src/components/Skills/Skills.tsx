import React from "react"
import Slider from "react-slick"

import "./Skills.scss"

interface SkillCard {
  label: string
  icon: any
  color: string
  description: string
}

interface SubSkillCard {
  label: string
  icon: any
}

interface SkillsProps {
  items: Array<SkillCard>
  subItems: Array<SubSkillCard>
}

class Skills extends React.Component<SkillsProps, {}> {
  private sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  }

  private renderSkills() {
    const { items } = this.props

    return items.map((item, index) => {
      return (
        <div
          className="column is-3-fullhd is-4-widescreen is-6-tablet is-6-mobile is-12-mobilexs skill"
          key={`skill-item-${index}`}
        >
          <div className="card">
            <div className="card-content text-center">
              <div
                className="icon-container"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              <p className="title is-4 is-block" style={{ color: item.color }}>
                {item.label}
              </p>
            </div>
          </div>
        </div>
      )
    })
  }

  private renderSubSkills() {
    const { subItems } = this.props

    return subItems.map((item, index) => {
      return (
        <div className="subskill" key={`subskill-item-${index}`}>
          <div className="icon-container">{item.icon}</div>
          <div className="label">{item.label}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <section id="Skills" title="Skills" className="Skills block-section">
        <div className="columns">
          <div className="column is-6 is-offset-3-tablet is-12-mobile">
            <h2 className="title is-2 has-text-white">Skills</h2>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 is-offset-3-tablet is-12-mobile">
            <div className="columns is-multiline is-mobile">{this.renderSkills()}</div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 is-offset-3-tablet is-12-mobile">
            <h3 className="title is-3 has-text-white">Some More...</h3>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 is-offset-3-tablet is-12-mobile">
            <div className="card">
              <div className="card-content px-0">
                <Slider {...this.sliderSettings} arrows={false}>
                  {this.renderSubSkills()}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills
