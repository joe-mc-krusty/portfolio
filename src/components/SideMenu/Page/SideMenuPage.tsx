import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./SideMenuPage.scss"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { Link } from "gatsby"

interface SideMenuPageProps {
  icon: IconProp
  label: string
  link: string
}

class SideMenuPage extends React.Component<SideMenuPageProps> {
  render() {
    return (
      <li className="SideMenuPage">
        <Link to={this.props.link}>
          <FontAwesomeIcon icon={this.props.icon} className="icon" />
          {this.props.label}
        </Link>
      </li>
    )
  }
}

export default SideMenuPage
