import React, { Component } from 'react'
import Tidbit from './Tidbit'
import Terminal from './FakeTerminal'
import TerminalLine from './TerminalLine'
import PropTypes from 'prop-types';
import { Link } from "gatsby"

class AboutMeSnippet extends Component {
  render() {
    return (
      <div className="about-me-snippet">
        <Terminal>
          <TerminalLine>Hello interweb traveler.</TerminalLine>
          <TerminalLine>My name is Andrew Blowe, and this is my personal website.</TerminalLine>
          <TerminalLine className="ready-line">Ready to find out more?</TerminalLine>
          <TerminalLine useRawChildren={true}><Link to="/portfolio/" className="go-btn btn">Go</Link></TerminalLine>
          <TerminalLine useRawChildren={true}><div className="back-btn btn" onClick={() => window.history.back()}>Take me back</div></TerminalLine>
        </Terminal>
      </div>
    )
  }
}

export default AboutMeSnippet

AboutMeSnippet.props = {
  onEnter: PropTypes.func
}