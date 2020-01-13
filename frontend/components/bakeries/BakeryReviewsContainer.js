import {connect} from 'react-redux';
import BakeryReviews from './BakeryReviews';

import { fetchReviewsByBakeryId } from "../../actions/reviews"

const mapStateToProps = ({entities}, {match}) => {
    let bakeryId = undefined
    if (entities.bakeries[match.params.storeSlug]) bakeryId = entities.bakeries[match.params.storeSlug].id
    return {
        bakeryId,
        bakeryReviews: Object.values(entities.reviews).filter(review => review.reviewableId === bakeryId)
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchReviewsByBakeryId: (bakeryId) => dispatch(fetchReviewsByBakeryId(bakeryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BakeryReviews)