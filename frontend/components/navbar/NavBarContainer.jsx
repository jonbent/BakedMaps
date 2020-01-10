import {connect} from 'react-redux';
import { logout } from "../../actions/session";
import { receiveCity } from '../../actions/cities'

import NavBar from './NavBar'

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  receiveCity: (city) => dispatch(receiveCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);