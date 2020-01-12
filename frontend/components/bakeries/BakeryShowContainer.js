import { connect } from "react-redux";
import BakeryShow from "./BakeryShow";

import { updateBounds } from "../../actions/filters";
import { fetchBakery } from "../../actions/bakeries";

const mapStateToProps = ({ entities, ui }, ownProps) => ({
    bakery: entities.bakeries[ownProps.match.params.bakerySlug],
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBakery: () => dispatch(fetchBakery(ownProps.match.params.bakerySlug))
});
export default connect(mapStateToProps, mapDispatchToProps)(BakeryShow);
