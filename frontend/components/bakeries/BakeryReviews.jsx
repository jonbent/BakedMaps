import React, { Component } from 'react'

export default class BakeryReviews extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchReviewsByBakeryId(this.props.bakeryId)
    };
    
    render() {
        return (
            <div className="reviews-container">
                
            </div>
        )
    }
}

