import {connect} from 'react-redux';
import React from 'react'
import ReviewFormContainer from '../reviews/ReviewFormContainer'

import { postReview } from '../../actions/reviews'
import {closeModal} from '../../actions/modals'

const Modal = ({ modal, closeModal}) => {
    let component;
    switch(modal){
        case "review":
            component = <ReviewFormContainer/>
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    modal: state.ui.modal,

})
const mapDispatchToProps = (dispatch) => ({
    postReview: (review) => dispatch(postReview(review)),
    closeModal: () => dispatch(closeModal())
})
export default connect(mapStateToProps, mapDispatchToProps)(Modal)