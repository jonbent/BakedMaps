import React, { Component } from 'react'

export default class OutsideClickHandler extends Component {
    constructor(props) {
        super(props)
    
        this.setRef = this.setRef.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleOutsideClick);
    }

    setRef(node){
        this.ref = node;
    }

    handleOutsideClick(e, ...options) {
        if (this.ref && !this.ref.contains(e.target)) {
            this.props.action(...options);
        }
    }
    
    render() {
        return (
            <div ref={this.setRef}>{this.props.children}</div>
        );
    }
}
