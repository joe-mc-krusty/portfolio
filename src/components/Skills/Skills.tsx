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
  color: string
}

interface SkillsProps {
  items: Array<SkillCard>
  subItems: Array<SubSkillCard>
}

class Skills extends React.Component<SkillsProps, {}> {
  private items = this.props.items

  private sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
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
          className={`column is-3-fullhd is-2-tablet is-1-mobile skill ${item.color}`}
          key={`skill-item-${index}`}
        >
          <div className="card">
            <div className="card-content text-center">
              <div className="icon-container">{item.icon}</div>
              <p className="title is-4 is-block">{item.label}</p>
              <p>{item.description}</p>
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
      <section id="Skills" title="Skills" className="Skills">
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <h2 className="title is-2">Skills</h2>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <div className="columns is-multiline">{this.renderSkills()}</div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6 is-offset-3">
            <div className="card">
              <div className="card-content">
                <p className="title is-5">Some More...</p>
                <Slider {...this.sliderSettings}>
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
