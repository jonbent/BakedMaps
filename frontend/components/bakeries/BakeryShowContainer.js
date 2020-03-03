import { connect } from "react-redux";
import BakeryShow from "./BakeryShow";

import { updateBounds } from "../../actions/filters";
import { fetchBakery } from "../../actions/bakeries";
import { postFollow, deleteFollow } from "../../actions/follows";
import { receiveReviewAmount } from '../../actions/filters'

const mapStateToProps = ({ entities, ui, session }, {match}) => {
  let bakeryId = undefined;
  let storeType = match.params.storeType 
  if (storeType === "deliveries" || storeType === "stores") storeType = "bakeries"
  if (entities[storeType][match.params.storeSlug]) bakeryId = entities[storeType][match.params.storeSlug].id
  return {
    currentUser: entities.users[session.name],
    follows: Object.values(entities.follows).filter(follow => follow.bakeryTag === match.params.storeSlug),
    bakeryId,
    bakery: entities.bakeries[match.params.storeSlug],
  }
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBakery: () => dispatch(fetchBakery(ownProps.match.params.storeSlug, ownProps.match.params.storeType)),
  openReviewModal: (payload) => dispatch(receiveReviewAmount(payload)),
  postFollow: (user) => dispatch(postFollow({ userId: user.id, bakeryTag: ownProps.match.params.storeSlug, bakeryType: ownProps.match.params.storeType})),
  deleteFollow: (followId) => dispatch(deleteFollow(followId))
});
export default connect(mapStateToProps, mapDispatchToProps)(BakeryShow);
