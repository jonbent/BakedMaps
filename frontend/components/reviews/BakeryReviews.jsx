import React, { Component } from 'react'
import StarButton from '../reviews/StarButton'
import GivenStars from '../reviews/GivenStars'
import Reviews from './Reviews'

export default class BakeryReviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numStarsHovered: 0,
            ready: false
        }
        this.handleStarHover = this.handleStarHover.bind(this)
        this.resetStars = this.resetStars.bind(this)
    }
    
    componentDidMount(){
        this.props.fetchReviewsByBakeryId(this.props.bakeryId).then(() => this.setState({ ready: true }))
    };
    handleStarHover(num){
        this.setState({
            numStarsHovered: num
        })
    }
    resetStars(){
        this.setState({
            numStarsHovered: 0
        })
    }
    requireLoggedIn(func, ...args) {
        if (this.props.currentUser) {
            func(...args)
        } else {
            this.props.history.push('/login')
        }
    }
    
    render() {
        const {object} = this.props
        return (
            <div className="reviews-container">
                <div className="reviews-and-form">
                    <div>
                        <div className="form">
                            <h2>Write A Review</h2>
                            <h3>Select A Rating</h3>
                            <div className="star-select">
                                {[...Array(5).keys()].map(num => {
                                    return (
                                        <StarButton key={num} 
                                            resetStars={this.resetStars} 
                                            onHover={() => this.handleStarHover(num + 1)} 
                                            hovered={this.state.numStarsHovered >= num + 1} 
                                            onClick={() => this.requireLoggedIn(() => this.props.openReviewModal({ reviewAmount: num + 1, reviewableType: this.props.match.params.storeType, reviewableId: this.props.bakeryId}))}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="headers">
                            <h2>Reviews</h2>
                            <div className="given-stars-container">
                                <GivenStars numStars={Math.round(object.rating * 10) / 10}/>
                                <span className='value'>{Math.round(object.rating * 10) / 10} stars</span>
                            </div>
                        </div>
                    </div>
                    {this.state.ready && 
                        <Reviews reviews={this.props.reviews} users={this.props.users} />
                    }
                </div>
            </div>
        )
    }
}

