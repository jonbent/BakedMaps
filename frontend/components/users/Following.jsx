import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import GivenStars from '../reviews/GivenStars'
import CheckMark from '../svg/check_mark'
import HireMe from '../HireMe'

export default class Following extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ready: false,
            followedBakeries: []
        }
    }
    
    
    componentDidMount(){
        this.props.fetchBakeriesFromFollowings(this.props.follows).then(() => this.setState({ ready: true}))
    }
    render() {
        const {follows, bakeries} = this.props
        if (!this.state.ready) return null;
        const content = follows.length ? (
            <ul>
                {follows.map(follow => {
                    const bakery = bakeries[follow.bakeryTag];
                    return (
                        <li key={follow.id}>
                            <div>
                                <div className="follow-container">
                                    <Link to={`/${follow.bakeryType}/${follow.bakeryTag}`} className="bakery-avatar">
                                        <div>
                                            <img src={bakery.avatar_image.small_url} alt={bakery.name} />
                                        </div>
                                    </Link>
                                    <h4 className="bakery-name">
                                        <Link to={`/${follow.bakeryType}/${follow.bakeryTag}`}>
                                            {bakery.name}
                                        </Link>
                                    </h4>
                                    <div className="location">
                                        {bakery.city}, {bakery.state}
                                    </div>
                                    <div className="given-stars-container">
                                        <GivenStars numStars={Math.round(bakery.rating * 10) / 10} />
                                        ({bakery.reviews_count})
                                        </div>
                                    <div className={`open-status ${
                                        bakery.open_now ? "open" : "closed"
                                        }`}>
                                        {bakery.open_now ? "Open Now" : "Closed"}
                                    </div>
                                    <div className="follow-toggle" onClick={() => this.props.deleteFollow(follow.id)}>
                                        <div className="follow-button">
                                            <CheckMark />
                                            <span>
                                                Following
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        ) : (
            <div className="none-found">
                Not following anyone yet
            </div>
        ) 
        return (
            <div className="user-following">
                {content}
                <HireMe/>
            </div>
        )
    }
}
