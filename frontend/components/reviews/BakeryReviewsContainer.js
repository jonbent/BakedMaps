import {connect} from 'react-redux';
import BakeryReviews from './BakeryReviews';

import { fetchReviewsByBakeryId } from "../../actions/reviews"
import { openModal } from "../../actions/modals"
import { receiveReviewAmount } from '../../actions/filters'

const mapStateToProps = ({entities}, {match}) => {
    let bakeryId = undefined
    let storeType = match.params.storeType 
    if (entities[storeType][match.params.storeSlug]) bakeryId = entities[storeType][match.params.storeSlug].id
    if (match.params.storeType === "deliveries" || match.params.storeType === "stores") storeType = "bakeries"
    return {
        bakeryId,
        object: entities[storeType][match.params.storeSlug],
        reviews: Object.values(entities.reviews).filter(review => review.reviewableId === bakeryId),
        users: entities.users
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchReviewsByBakeryId: (bakeryId) => dispatch(fetchReviewsByBakeryId(bakeryId)),
    openReviewModal: (payload) => dispatch(receiveReviewAmount(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(BakeryReviews)