import React, { Component } from "react";

export default class CopiedContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 'none',
            opacity: 0,
            transform: `translateX(0px) translateY(8px) translateZ(0px)`
        }
    }
    
    render(){
        return (
          <div className="copied-container">
            <div className="copied" style={this.props.style}>
              <span>Link Copied!</span>
            </div>
          </div>
        );
    }
}

