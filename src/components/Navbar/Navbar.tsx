import React from "react"
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"

import "./Navbar.scss"

interface NavbarProps {
  hideOffset: number
}
interface NavbarState {
  scrollY: number
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  state: NavbarState = {
    scrollY: 0,
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();

    window.addEventListener("scroll", this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  private handleScroll = () => {
    this.setState({ scrollY: window.scrollY })
  }

  private setVisibility(scroll: number) {
    if (scroll <= this.props.hideOffset) {
      return "is-transparent transparent"
    }

    if (scroll > window.innerHeight) {
      return "plain"
    }

    return "invisible"
  }

  render() {
    return (
      <nav
        className={`Navbar navbar is-fixed-top-desktop is-hidden-touch
          ${this.setVisibility(this.state.scrollY)}
        `}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link
              activeClass="is-active"
              to="HeroWrapper"
              spy={true}
              smooth={true}
              duration={1200}
              className="navbar-item"
            >
              Top <FontAwesomeIcon fixedWidth icon={faArrowAltCircleUp} />
            </Link>
            <Link
              activeClass="is-active"
              to="About"
              spy={true}
              smooth={true}
              duration={1200}
              offset={1}
              className="navbar-item"
            >
              About
            </Link>
            <Link
              activeClass="is-active"
              to="Resume"
              spy={true}
              smooth={true}
              duration={1200}
              offset={1}
              className="navbar-item"
            >
              Resume
            </Link>
            <Link
              activeClass="is-active"
              to="Skills"
              spy={true}
              smooth={true}
              duration={1200}
              offset={1}
              className="navbar-item"
            >
              Skills
            </Link>
            <Link
              activeClass="is-active"
              to="Languages"
              spy={true}
              smooth={true}
              duration={1200}
              offset={1}
              className="navbar-item"
            >
              Lang
            </Link>
            <Link
              activeClass="is-active"
              to="Contact"
              spy={true}
              smooth={true}
              duration={1200}
              offset={1}
              className="navbar-item"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
