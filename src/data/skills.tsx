import React from "react"

import { Icon as Iconify } from "@iconify/react"
import ansibleIcon from "@iconify/icons-cib/ansible"
import ovhIcon from "@iconify/icons-cib/ovh"
import magentoIcon from "@iconify/icons-cib/magento"
import ionicIcon from "@iconify/icons-cib/ionic"
import debianIcon from "@iconify/icons-cib/debian"
import archIcon from "@iconify/icons-cib/arch-linux"
import tsIcon from "@iconify/icons-cib/typescript"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngular,
  faJsSquare,
  faReact,
  faDocker,
  faPhp,
  faSymfony,
  faPython,
  faWordpress,
  faGulp,
  faSass,
  faBootstrap,
  faNodeJs,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons"

const skillData = [
  {
    label: "Javascript",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faJsSquare}
        size="3x"
      />
    ),
    color: "yellow",
    description: "ES6",
  },
  {
    label: "Angular",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faAngular}
        size="3x"
      />
    ),
    color: "red",
    description: "Version 8/9",
  },
  {
    label: "React",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faReact}
        size="3x"
      />
    ),
    color: "blue",
    description: "Redux Next.js Gatsby",
  },
  {
    label: "Ansible",
    icon: (
      <Iconify
        className="flex-align-self-center iconify-icon"
        icon={ansibleIcon}
      />
    ),
    color: "black",
    description: "CLI & Ansible Tower/AWX",
  },
  {
    label: "OVH",
    icon: (
      <Iconify className="flex-align-self-center iconify-icon" icon={ovhIcon} />
    ),
    color: "lightblue",
    description: "Public Cloud",
  },
  {
    label: "Docker",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faDocker}
        size="3x"
      />
    ),
    color: "darkgreen",
    description: "CLI, Images and Compose",
  },
  {
    label: "PHP",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faPhp}
        size="3x"
      />
    ),
    color: "dark",
    description: "v5.6 & v7+",
  },
  {
    label: "Magento",
    icon: (
      <Iconify
        className="flex-align-self-center iconify-icon"
        icon={magentoIcon}
      />
    ),
    color: "green",
    description: "v1.9",
  },
  {
    label: "Symfony",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faSymfony}
        size="3x"
      />
    ),
    color: "purple",
    description: "v3 & v4",
  },
  {
    label: "Python",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faPython}
        size="3x"
      />
    ),
    color: "orange",
    description: "Cement Framework",
  },
  {
    label: "Ionic",
    icon: (
      <Iconify
        className="flex-align-self-center iconify-icon"
        icon={ionicIcon}
      />
    ),
    color: "blue",
    description: "v5",
  },
  {
    label: "Wordpress",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faWordpress}
        size="3x"
      />
    ),
    color: "red",
    description: "Themes & Plugins",
  },
  {
    label: "Debian",
    icon: (
      <Iconify
        className="flex-align-self-center iconify-icon"
        icon={debianIcon}
      />
    ),
    color: "black",
    description: "Server Distro",
  },
  {
    label: "Arch",
    icon: (
      <Iconify
        className="flex-align-self-center iconify-icon"
        icon={archIcon}
      />
    ),
    color: "lightblue",
    description: "I use Arch btw",
  },
  {
    label: "Gulp",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faGulp}
        size="3x"
      />
    ),
    color: "darkgreen",
    description: "v3 & v4",
  },
  {
    label: "Sass",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faSass}
        size="3x"
      />
    ),
    color: "dark",
    description: "Scss",
  },
  {
    label: "Bootstrap",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faBootstrap}
        size="3x"
      />
    ),
    color: "purple",
    description: "v3 & v4",
  },
  {
    label: "Node",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faNodeJs}
        size="3x"
      />
    ),
    color: "green",
    description: "NestJS framework",
  },
  {
    label: "Typescript",
    icon: (
      <Iconify className="flex-align-self-center iconify-icon" icon={tsIcon} />
    ),
    color: "orange",
    description: "v3",
  },
  {
    label: "Gitlab",
    icon: (
      <FontAwesomeIcon
        className="flex-align-self-center"
        fixedWidth
        icon={faGitlab}
        size="3x"
      />
    ),
    color: "yellow",
    description: "CI/CD Pipelines",
  },
]

export default skillData
