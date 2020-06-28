import React from "react"

import Particles, { OutMode } from "react-particles-js"

import "./ParticlesBg.scss"

class ParticlesBg extends React.Component<{}> {
  render() {
    return (
      <Particles 
        className="ParticlesBg"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    )
  }
}

export default ParticlesBg
