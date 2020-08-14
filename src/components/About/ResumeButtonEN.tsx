import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

import { Icon as Iconify } from "@iconify/react"
import flagForUs from "@iconify/icons-emojione/flag-for-united-states"

const ResumeButtonEN = () => {
  const resume = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "resumes" }
        name: { eq: "CV-xavier-sanna-en" }
      ) {
        name
        publicURL
      }
    }
  `)

  return (
    <a
      className="button is-primary is-outlined resume-btn"
      href={resume.file.publicURL}
      title={resume.file.name}
    >
      <FontAwesomeIcon icon={faDownload} />
      <span>Download my Resume</span>
      <Iconify icon={flagForUs} />
    </a>
  )
}

export default ResumeButtonEN
