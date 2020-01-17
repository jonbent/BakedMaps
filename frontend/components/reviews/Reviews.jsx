import React, {Component} from 'react'
import Review from './Review'
import HireMe from '../HireMe'
export default class Reviews extends Component {
    componentWillUnmount() {
        // debugger
    }
    
    render (){
        const { reviews, users } = this.props;
        return (
            <div className="inner-reviews-container">
                {!reviews.length &&
                    <div className="none-found">
                        Be the first to Review!
                    </div>
                }
                {reviews.map(review => {
                    return <Review key={review.id} review={review} users={users} />
                })}
            </div>
        )
    }
}

