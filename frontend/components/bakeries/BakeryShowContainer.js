import { connect } from "react-redux";
import BakeryShow from "./BakeryShow";

import { updateBounds } from "../../actions/filters";
import { fetchBakery } from "../../actions/bakeries";
import { postFollow } from "../../actions/follows";
import { receiveReviewAmount } from '../../actions/filters'

const mapStateToProps = ({ entities, ui, session }, {match}) => {
  let bakeryId = undefined;
  let storeType = match.params.storeType 
  if (entities[storeType][match.params.storeSlug]) bakeryId = entities[storeType][match.params.storeSlug].id
  return {
    currentUser: entities.users[session.name],
    bakeryId,
    bakery: entities.bakeries[match.params.storeSlug],
  }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBakery: () => dispatch(fetchBakery(ownProps.match.params.storeSlug, ownProps.match.params.storeType)),
  openReviewModal: (reviewableId) => dispatch(receiveReviewAmount({ reviewAmount: 0, reviewableType: ownProps.match.params.storeType, reviewableId })),
  postFollow: (user) => dispatch(postFollow({ userId: user.id, bakeryTag: ownProps.match.params.storeSlug, bakeryType: ownProps.match.params.storeType}))
});
export default connect(mapStateToProps, mapDispatchToProps)(BakeryShow);
