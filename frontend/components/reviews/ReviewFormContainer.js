import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { postReview } from '../../actions/reviews'
import { closeModal } from '../../actions/modals'

const mapStateToProps = ({ui, entities, session, errors}) => ({
    reviewAmount: ui.filters.reviewAmount,
    reviewableType: ui.filters.reviewableType,
    reviewableId: ui.filters.reviewableId,
    currentUserId: entities.users[session.name].id,
    errors: errors.reviews
})
const mapDispatchToProps = (dispatch) => ({
    postReview: (formReview) => dispatch(postReview(formReview)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)