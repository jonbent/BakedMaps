import {connect} from 'react-redux';
import HomeSplash from './HomeSplash';
import { fetchBakeriesSplash } from '../../actions/bakeries'
const mapStateToProps = ({entities, ui}) => ({
    bakeries: entities.bakeries,
    city: ui.city
})
const mapDispatchToProps = (dispatch) => ({
    fetchBakeriesSplash: (lat, long, mileRadius = 10) => dispatch(fetchBakeriesSplash({ lat, long, mileRadius})),
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeSplash)