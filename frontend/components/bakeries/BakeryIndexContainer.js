import {connect} from 'react-redux';
import BakeryIndex from './BakeryIndex';

import {receiveReviewAmount, updateBounds} from '../../actions/filters';
import { fetchBakeries, fetchBakery } from "../../actions/bakeries";
import {fetchReviewableDistribution} from "../../actions/reviews";
import {closeHamburger} from "../../actions/hamburger";

const mapStateToProps = ({entities, ui, session}) => ({
    bakeries: entities.bakeries,
    bounds: ui.filters.bounds,
    city: ui.city,
    currentUser: entities.users[session.name],
    reviewDistribution: ui.reviewDistribution
});
const mapDispatchToProps = dispatch => ({
    fetchBakeries: (bounds, filter) => dispatch(fetchBakeries(bounds, filter)),
    fetchBakery: (bakerySlug, storeType) => dispatch(fetchBakery(bakerySlug, storeType)),
    openReviewModal: (payload) => dispatch(receiveReviewAmount(payload)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds)),
    fetchReviewableDistribution: (reviewableSlug, reviewableId) => dispatch(fetchReviewableDistribution(reviewableSlug, reviewableId)),
    closeHamburger: () => dispatch(closeHamburger())
});
export default connect(mapStateToProps, mapDispatchToProps)(BakeryIndex);