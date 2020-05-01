import { connect } from "react-redux";
import { login } from "../../actions/session";
import {clearErrors} from '../../actions/errors';

import SessionForm from "./SessionForm";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.name],
  errors: state.errors.session,
  formType: "Log in"
});
const mapDispatchToProps = dispatch => ({
  processForm: formUserAndHistory => dispatch(login(formUserAndHistory)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
