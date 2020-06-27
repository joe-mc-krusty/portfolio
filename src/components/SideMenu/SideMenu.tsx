import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "../Image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHashtag,
  faHandshake,
  faFireAlt,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"

import SideMenuFolder from "./Folder/SideMenuFolder"
import SideMenuPage from "./Page/SideMenuPage"

import "./SideMenu.scss"

interface SideMenuState {
  folders: Array<boolean>
}

class SideMenu extends React.Component<{}, SideMenuState> {
  state: SideMenuState = {
    folders: Array(1).fill(true),
  }

  componentDidUpdate() {
    console.log(this.state)
  }
  render() {
    return (
      <aside className="SideMenu menu">
        <Image
          filename="logo-full-regular.png"
          alt="CodeCannon Logo"
          className="logo"
        />
        <Link to="/" className="menu-label">
          <p>/home/anonymous/</p>
        </Link>
        <ul className="menu-list">
          <SideMenuFolder
            label={[<span>Tags </span>, <FontAwesomeIcon icon={faFireAlt} />]}
          >
            <StaticQuery
              query={graphql`
                query {
                  allStrapiTag {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.allStrapiTag.edges.map((tag, i) => {
                  return (
                    <SideMenuPage
                      icon={faHashtag}
                      label={tag.node.name}
                      link={`/tags/${tag.node.name}`}
                    />
                  )
                })
              }
            />
          </SideMenuFolder>
          <SideMenuPage icon={faInfoCircle} label="About" link="/" />
          <SideMenuPage icon={faHandshake} label="Signin / Signup" link="/" />
        </ul>
      </aside>
    )
  }

  private toggleFolder = (index: number) => {
    const newStates = this.state.folders
    newStates[index] = !this.state.folders[index]
    this.setState({ folders: newStates })
  }

  private setFolderClass(state: boolean) {
    return state ? "folder open" : "folder"
  }

}

export default SideMenu
