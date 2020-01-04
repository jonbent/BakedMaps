import {connect} from 'react-redux';
import { logout } from "../../actions/session";

import Greeting from './Greeting'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);