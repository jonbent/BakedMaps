import {connect} from 'react-redux';
import { logout } from "../../actions/session";
import { receiveCity } from '../../actions/cities'
import { fetchSearchResults } from '../../actions/filters'

import NavBar from './NavBar'

const mapStateToProps = ({entities, ui, session}) => ({
    currentUser: entities.users[session.name],
    products: ui.filters.products,
    city: ui.city
})
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  receiveCity: (city) => dispatch(receiveCity(city)),
  fetchSearchResults: (query, city) => dispatch(fetchSearchResults(query, city))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);