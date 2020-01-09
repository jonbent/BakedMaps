import { connect } from "react-redux";
import { login } from "../../actions/session";
import {clearErrors} from '../../actions/errors';

import SessionForm from "./SessionForm";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.session,
  formType: "Log in"
});
const mapDispatchToProps = dispatch => ({
  processForm: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
