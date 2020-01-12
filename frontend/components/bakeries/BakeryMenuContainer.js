import { connect } from "react-redux";
import BakeryMenu from "./BakeryMenu";
import { fetchMenuItems } from "../../actions/menuItems";

const mapStateToProps = ({ entities, ui }, ownProps) => ({
    menuItems: Object.values(entities.menuItems),
    bakery: entities.bakeries[ownProps.match.params.bakerySlug],
    menuItemSize: ui.menuItemSize
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMenuItems: () =>
    dispatch(fetchMenuItems(ownProps.match.params.bakerySlug))
});
export default connect(mapStateToProps, mapDispatchToProps)(BakeryMenu);
