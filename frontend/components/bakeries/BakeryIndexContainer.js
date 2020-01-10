import {connect} from 'react-redux';
import BakeryIndex from './BakeryIndex'

import {updateBounds} from '../../actions/filters'
import { fetchBakeries } from '../../actions/bakeries';

const mapStateToProps = ({entities, ui}) => ({
    bakeries: entities.bakeries,
    bounds: ui.filters.bounds,
    city: ui.city
})
const mapDispatchToProps = dispatch => ({
    fetchBakeries: (bounds, filter) => dispatch(fetchBakeries(bounds, filter)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
});
export default connect(mapStateToProps, mapDispatchToProps)(BakeryIndex);