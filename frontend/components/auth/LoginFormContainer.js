import { connect } from "react-redux";
import { login } from "../../actions/session";

import SessionForm from "./SessionForm";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.session,
  formType: "Login"
});
const mapDispatchToProps = dispatch => ({
  processForm: (formUser) => dispatch(login(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
