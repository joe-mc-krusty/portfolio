import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

import { Icon as Iconify } from "@iconify/react"
import flagForFrance from "@iconify/icons-emojione/flag-for-france"

const ResumeButtonFR = () => {
  const resume = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "resumes" }
        name: { eq: "CV-xavier-sanna-fr" }
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
      <Iconify icon={flagForFrance} />
    </a>
  )
}

export default ResumeButtonFR
