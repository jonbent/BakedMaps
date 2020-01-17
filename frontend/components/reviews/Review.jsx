import React from 'react'
import {Link} from 'react-router-dom'
import GivenStars from './GivenStars'

const Review = ({review, users}) => {
    // debugger
    return (
        <div className="review">
            <Link className="user-info" to={`/users/${users[review.userId].username}`}>
                <div className="user-img">
                    <img src={users[review.userId].avatarUrl} alt={users[review.userId].username}/>
                </div>
            </Link>
            <h3 className="review-title" order="3">
                {review.title}
            </h3>
            <div className="review-stars" order="2">
                <GivenStars numStars={ review.rating + 1 }/>
            </div>
            <div className="review-body" order="4">
                {review.body}
            </div>
            <div className="review-time"><time>{review.updatedAt}</time></div>
        </div>
    )
}

export default Review
