import { connect } from "react-redux";
import BakeryMenu from "./BakeryMenu";
import { fetchMenuItems } from "../../actions/menuItems";

const mapStateToProps = ({ entities, ui }, ownProps) => ({
    menuItems: Object.values(entities.menuItems),
    bakery: entities.bakeries[ownProps.match.params.storeSlug],
    menuItemSize: ui.menuItemSize
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMenuItems: (filter) =>
    dispatch(fetchMenuItems(ownProps.match.params.storeSlug, ownProps.match.params.storeType, filter))
});
export default connect(mapStateToProps, mapDispatchToProps)(BakeryMenu);
