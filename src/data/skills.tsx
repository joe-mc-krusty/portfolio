import React from "react"

import { Icon as Iconify } from "@iconify/react"
import jsIcon from "@iconify/icons-logos/javascript"
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
    description: "CLI & Ansible Tower/AWX",
  },
  {
    label: "OVH",
    icon: (
      <Iconify className="flex-align-self-center iconify-icon" icon={ovhIcon} />
    ),
    color: "#1c51a5",
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
    color: "#1c51a5",
    description: "CLI, Images and Compose",
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
    color: "#1c51a5",
    description: "NestJS framework",
  },
  {
    label: "Typescript",
    icon: (
      <Iconify className="flex-align-self-center iconify-icon" icon={tsIcon} />
    ),
    color: "#1c51a5",
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
    color: "#1c51a5",
    description: "CI/CD Pipelines",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
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
    color: "#1c51a5",
    description: "v3 & v4",
  },
]

export default skillData
