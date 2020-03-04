import {connect} from 'react-redux';
import BakeryReviews from './BakeryReviews';

import { fetchReviewsByBakeryId } from "../../actions/reviews"
import { openModal } from "../../actions/modals"
import { receiveReviewAmount } from '../../actions/filters'

const mapStateToProps = ({entities, session}, {match}) => {
    let bakeryId = undefined
    let storeType = match.params.storeType 
    if (storeType === "deliveries" || storeType === "stores") storeType = "bakeries"
    if (entities[storeType][match.params.storeSlug]) bakeryId = entities[storeType][match.params.storeSlug].id
    return {
        bakeryId,
        object: entities[storeType][match.params.storeSlug],
        reviews: Object.values(entities.reviews).filter(review => review.reviewableId === bakeryId),
        currentUser: entities.users[session.name],
        users: entities.users
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchReviewsByBakeryId: (bakeryId) => dispatch(fetchReviewsByBakeryId(bakeryId)),
    openReviewModal: (payload) => dispatch(receiveReviewAmount(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(BakeryReviews)