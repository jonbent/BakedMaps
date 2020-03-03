import {connect} from 'react-redux';
import React from 'react'
import ReviewFormContainer from '../reviews/ReviewFormContainer'

import { postReview } from '../../actions/reviews'
import {closeModal} from '../../actions/modals'
import AddressEdit from "../users/AddressEdit";
import NameEdit from "../users/NameEdit";
import BirthdayEdit from "../users/BirthdayEdit";
import GenderEdit from "../users/GenderEdit";
import EmailEdit from "../users/EmailEdit";
import PasswordEdit from "../users/PasswordEdit";

const Modal = ({ modal, closeModal}) => {
    let component;
    switch(modal){
        case "review":
            component = <ReviewFormContainer/>;
            break;
        case "addressEdit":
            component = <AddressEdit closeModal={closeModal}/>;
            break;
        case "nameEdit":
            component = <NameEdit closeModal={closeModal}/>;
            break;
        case "birthdayEdit":
            component = <BirthdayEdit closeModal={closeModal}/>;
            break;
        case "genderEdit":
            component = <GenderEdit closeModal={closeModal}/>;
            break;
        case "emailEdit":
            component = <EmailEdit closeModal={closeModal}/>;
            break;
        case "passwordEdit":
            component = <PasswordEdit closeModal={closeModal}/>;
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