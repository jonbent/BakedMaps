import { connect } from "react-redux";
import { signup } from "../../actions/session";
import SessionForm from "./SessionForm";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.session,
  formType: "Signup"
});
const mapDispatchToProps = dispatch => ({
  processForm: (formUser) => dispatch(signup(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
