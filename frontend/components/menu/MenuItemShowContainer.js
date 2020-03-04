import {connect } from 'react-redux';
import MenuItemShow from "./MenuItemShow";
import {fetchBakery} from "../../actions/bakeries";
import {fetchMenuItem} from "../../actions/menuItems";

const mapStateToProps = ({entities}, {match}) => {
    let storeType = match.params.storeType;
    if (storeType === "deliveries" || storeType === "stores") storeType = "bakeries"

    return {
        object: entities[storeType][match.params.storeSlug],
        menuItem: entities.menuItems[match.params.menuItemSlug]
    }
};
const mapDispatchToProps = (dispatch, {match}) => ({
    fetchBakery: () => dispatch(fetchBakery(match.params.storeSlug, match.params.storeType)),
    fetchMenuItem: () => dispatch(fetchMenuItem(match.params.storeSlug, match.params.storeType, match.params.menuItemSlug))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItemShow);