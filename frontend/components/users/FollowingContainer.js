import {connect} from 'react-redux';
import Following from './Following'
import { fetchBakeriesFromFollowings } from '../../actions/bakeries'
import { deleteFollow } from '../../actions/follows'

const mapStateToProps = ({entities, ui}, {match}) => ({
    bakeries: entities.bakeries,
    selectedCity: ui.city
})

const mapDispatchToProps = (dispatch) => ({
    fetchBakeriesFromFollowings: (followings) => dispatch(fetchBakeriesFromFollowings(followings)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Following)