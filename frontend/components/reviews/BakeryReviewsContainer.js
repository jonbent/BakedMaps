import {connect} from 'react-redux';
import BakeryReviews from './BakeryReviews';

import { fetchReviewsByBakeryId } from "../../actions/reviews"
import { openModal } from "../../actions/modals"

const mapStateToProps = ({entities}, {match}) => {
    let bakeryId = undefined
    let storeType = match.params.storeType 
    if (match.params.storeType === "deliveries" || match.params.storeType === "stores") storeType = "bakeries"
    if (entities[storeType][match.params.storeSlug]) bakeryId = entities[storeType][match.params.storeSlug].id
    return {
        bakeryId,
        object: entities[storeType][match.params.storeSlug],
        reviews: Object.values(entities.reviews).filter(review => review.reviewableId === bakeryId),
        users: entities.users
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchReviewsByBakeryId: (bakeryId) => dispatch(fetchReviewsByBakeryId(bakeryId)),
    openReviewModal: () => dispatch(openModal('review'))
})

export default connect(mapStateToProps, mapDispatchToProps)(BakeryReviews)