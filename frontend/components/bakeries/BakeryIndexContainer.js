import {connect} from 'react-redux';
import BakeryIndex from './BakeryIndex'

import {updateBounds} from '../../actions/filters'
import { fetchBakeries } from '../../actions/bakeries';

const mapStateToProps = ({entities, ui}) => ({
    bakeries: entities.bakeries,
    bounds: ui.filters.bounds
})
const mapDispatchToProps = dispatch => ({
    fetchBakeries: (bounds) => dispatch(fetchBakeries(bounds)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
});
export default connect(mapStateToProps, mapDispatchToProps)(BakeryIndex);