import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TerminalLine extends Component {
  constructor(props) {
    super(props);
    this.state = { letterIndex: 0, currentText:  ""}  
    this.addLetter = this.addLetter.bind(this);
    this.doneAddingLetters = this.doneAddingLetters.bind(this);
  }
  
  componentDidMount() {
    if(this.props.useRawChildren) {
      this.props.onDone()
    } else if(this.props.useTypingEffect) {
      this.addLetter();
    }
  }
  
  componentDidUpdate() {
    if(this.props.useRawChildren) {
      this.props.onDone()
    } else if(this.props.useTypingEffect) {
      this.addLetter();
      this.doneAddingLetters();
    }
  }
  
  addLetter() {
    if(this.state.letterIndex < this.props.children.length) {
      setTimeout(() => {
        this.setState({ letterIndex: this.state.letterIndex + 1, currentText: this.props.children.substr(0, this.state.letterIndex + 1) });
      }, this.props.letterDelayTime)
      
    }
  }
  
  doneAddingLetters() {
    if(this.state.letterIndex === this.props.children.length) {
      this.props.onDone();
    }
  }
  
  render() {
    if(this.props.useRawChildren) {
      return this.props.children
    }
    
    return (
        <div className={`terminal-line ${this.props.className || ''}`}>
          {this.state.currentText}
        </div>
    );
  }
}

TerminalLine.propTypes = {
  useRawChildren: PropTypes.bool,
  useTypingEffect: PropTypes.bool,
  letterDelayTime: PropTypes.number,
  onDone: PropTypes.func,
  className: PropTypes.string
}

TerminalLine.defaultProps = {
  useRawChildren: false,
  useTypingEffect: true,
  letterDelayTime: 25
}