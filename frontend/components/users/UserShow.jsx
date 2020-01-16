import React, { Component } from 'react'
import NavigationBar from '../navigation/NavigationBar'
import {Route, Switch} from 'react-router-dom';
import Reviews from '../reviews/Reviews'
import Following from './FollowingContainer'
import Footer from '../navbar/Footer'
export default class UserShow extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.fetchUserInfo()
    }
    componentDidUpdate(prevProps){
        if (prevProps.match.params.username !== this.props.match.params.username) this.props.fetchUserInfo();
    }
    render() {
        const { user, userReviews, userFollows } = this.props
        if (!user || !user.reviewIds || (userReviews[0] === undefined && userReviews.length !== 0)) return null;
        const path = `/users/${user.username}`;
        const linkOptions = [
            ['/', 'Reviews'],
            ['/following', 'Following'],
            ['/favorites', 'Favorites', true],
            ['/posts', 'Posts', true]
        ]
        return (
            <div className="user-show-container">
                <div className="user-header">
                    <div className="username-container">{user.username}</div>
                    <div className="about-container">
                        <div></div>
                    </div>
                    <div className="stats-container">
                        <div className="reviews-panel"><span>{user.reviewIds.length} </span>Reviews</div>
                        <div className="favorites-panel"><span>0 </span>Favorites</div>
                        <div className="following-panel"><span>{user.followIds.length} </span>Following</div>
                    </div>
                    <div className="avatar-container">
                        <div className="avatar">
                            <img src={user.avatarUrl} alt={user.username}/>
                        </div>
                    </div>
                </div>
                <NavigationBar location={this.props.location} path={path} linkOptions={linkOptions}/>
                <Switch >
                    <Route path="/users/:username/following" render={props => <Following follows={userFollows}/>}/>
                    <Route path="/users/:username/" render={() => (
                        <div className="user-reviews-container">
                            <div className="reviews-container">
                                <Reviews reviews={userReviews} users={{ [user.id]: user }} />
                            </div>
                        </div>
                    )}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}