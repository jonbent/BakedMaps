import React, { Component } from 'react'
import CloseButton from '../svg/close_x_button'
import StarButton from './StarButton'

export default class ReviewForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            title: "",
            body: "",
            numStarsHovered: props.reviewAmount || 0,
            numStarsSelected: props.reviewAmount || 0
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleStarHover = this.handleStarHover.bind(this)
        this.resetStars = this.resetStars.bind(this)
        this.selectStars = this.selectStars.bind(this)
    }
    handleInput(e, field){
        this.setState({
            [field]: e.target.value
        })
    }

    handleStarHover(num) {
        this.setState({
            numStarsHovered: num
        })
    }
    resetStars() {
        this.setState({
            numStarsHovered: this.state.numStarsSelected
        })
    }
    selectStars(num){
        console.log(num)
        this.setState({
            numStarsSelected: num
        })
    }
    handleSubmit(e){
        const {reviewableId, reviewableType, currentUserId} = this.props;
        const {title, body, numStarsSelected} = this.state;
        let formReview = {
            title,
            body,
            rating: numStarsSelected,
            reviewableId,
            reviewableType,
            userId: currentUserId
        };
        this.props.postReview(formReview);
    }

    
    render() {
        const {closeModal, errors} = this.props;
        const {numStarsHovered, title, body} = this.state;

        return (
            <div>
                <div className="review-form-modal">
                    <div className="header">
                        <h4>Write a Review</h4>
                        <div className="close-modal" onClick={closeModal}>
                            <CloseButton/>
                        </div>
                    </div>
                    <div className="body-container">
                        <div className="body">
                            <div className="form-container">

                                {errors &&
                                    <mark className="errors">
                                        {Object.keys(errors).map(fieldName => {
                                            return (
                                                <ul key={fieldName}>
                                                    {errors[fieldName].map((err, idx) => {
                                                        return <li key={idx}>{`${fieldName[0].toUpperCase() + fieldName.slice(1)} ${err}`}</li>
                                                    })}
                                                </ul>
                                            )
                                        })}
                                    </mark>
                                }
                                <div className="form">
                                    <div className="star-rating">
                                        <p>My Rating</p>
                                        <div className="star-select">
                                            {[...Array(5).keys()].map(num => {
                                                return (
                                                    <StarButton key={num}
                                                        hovered={numStarsHovered >= num + 1}
                                                        onHover={() => this.handleStarHover(num + 1)} 
                                                        resetStars={this.resetStars} 
                                                        onClick={() => this.selectStars(num + 1)}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="review-title">
                                        <div>{title && <span>{title}</span>}</div>
                                        <label>
                                            <div>
                                                Title
                                                <var color="#CCCCCC" className="text-length">{title.length}/50</var>
                                            </div>
                                            <textarea value={title} onChange={e => this.handleInput(e, "title")}></textarea>
                                        </label>
                                    </div>
                                    <div className="review-body">
                                        <div>{body && <span>{body}</span>}</div>
                                        <label>
                                            <div>
                                                Body
                                                <var color="#CCCCCC" className="text-length">{body.length}/3000</var>
                                            </div>
                                            <textarea value={body} onChange={e => this.handleInput(e, "body")}></textarea>
                                        </label>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button className="post" onClick={this.handleSubmit}>Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
