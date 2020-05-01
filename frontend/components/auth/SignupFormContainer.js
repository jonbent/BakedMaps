import { connect } from "react-redux";
import { signup } from "../../actions/session";
import {clearErrors} from '../../actions/errors'
import SessionForm from "./SessionForm";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.name],
  errors: state.errors.session,
  formType: "Sign up"
});
const mapDispatchToProps = dispatch => ({
  processForm: formUserAndHistory => dispatch(signup(formUserAndHistory)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
