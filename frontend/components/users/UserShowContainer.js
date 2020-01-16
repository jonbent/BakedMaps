import {connect} from 'react-redux';
import UserShow from './UserShow';

import { fetchUserInfo } from '../../actions/users'
import { fetchUserReviews } from '../../actions/reviews'

const mapStateToProps = ({entities}, {match}) => {
    const user = entities.users[match.params.username]
    let userReviews = [];
    let userFollows = [];
    if (user && user.reviewIds && entities.reviews){
        userReviews = user.reviewIds.map(id => entities.reviews[id])
        userFollows = user.followIds.map(id => entities.follows[id])
    }
    return {
        user,
        userReviews,
        userFollows
    }
}

const mapDispatchToProps = (dispatch, {match}) => ({
    fetchUserInfo: () => dispatch(fetchUserInfo(match.params.username, true)),
    fetchUserReviews: (userId) => dispatch(fetchUserReviews(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)