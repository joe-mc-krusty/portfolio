import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCaretRight,
  faCaretDown,
  faFolder,
} from "@fortawesome/free-solid-svg-icons"

import "./SideMenuFolder.scss"

interface SideMenuFolderProps {
  children: React.ReactNode
  label: Array<JSX.Element | string>
}

interface SideMenuFolderState {
  open: boolean
}

class SideMenuFolder extends React.Component<
  SideMenuFolderProps,
  SideMenuFolderState
> {
  state: SideMenuFolderState = {
    open: false,
  }

  render() {
    return (
      <li className="SideMenuFolder">
        <a href="#" onClick={this.toggleFolder}>
          <FontAwesomeIcon fixedWidth
            icon={this.state.open ? faCaretDown : faCaretRight}
            className="caret-icon"
          />
          [
          <FontAwesomeIcon icon={faFolder} className="folder-icon" />]{" "}
          {this.props.label}
        </a>
        {this.state.open && (
          <ul className="menu-list">{this.props.children}</ul>
        )}
      </li>
    )
  }

  private toggleFolder = () => {
    this.setState({ open: !this.state.open })
  }
}

export default SideMenuFolder
