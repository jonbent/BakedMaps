import {connect} from 'react-redux';
import UserEdit from "./UserEdit";

import {saveUserField} from '../../actions/users'
import {openModal} from "../../actions/modals";

const mapStateToProps = ({entities, session}) => ({
    user: entities.users[session.name]
});

const mapDispatchToProps = (dispatch) => ({
    saveUserField: (username, field, val) => dispatch(saveUserField(username, {user: {field: val}})),
    openModal: (modal) => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)