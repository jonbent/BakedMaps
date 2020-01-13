import { connect } from "react-redux";
import BakeryDetails from "./BakeryDetails";

const mapStateToProps = ({ entities, ui }, ownProps) => ({
    bakery: entities.bakeries[ownProps.match.params.storeSlug],
    menuItemSize: ui.menuItemSize
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMenuItems: (filter) =>
        dispatch(fetchMenuItems(ownProps.match.params.storeSlug, ownProps.match.params.storeType, filter))
});
export default connect(mapStateToProps, mapDispatchToProps)(BakeryDetails);
