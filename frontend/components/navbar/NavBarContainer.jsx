import {connect} from 'react-redux';
import { logout } from "../../actions/session";
import { receiveCity } from '../../actions/cities'
import { fetchSearchResults } from '../../actions/filters'

import NavBar from './NavBar'
import {openHamburger} from "../../actions/hamburger";

const mapStateToProps = ({entities, ui, session}) => ({
    currentUser: entities.users[session.name],
    products: Object.values(ui.filters.products),
    city: ui.city
})
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  receiveCity: (city) => dispatch(receiveCity(city)),
  fetchSearchResults: (query, city) => dispatch(fetchSearchResults(query, city)),
  openHamburger: () => dispatch(openHamburger())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);