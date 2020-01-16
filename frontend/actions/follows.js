import * as FollowApiUtil from '../util/FollowApiUtil';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";


const receiveFollow = (payload) => ({
    type: RECEIVE_FOLLOW,
    payload
})

const removeFollow = (payload) => ({
    type: REMOVE_FOLLOW,
    payload
})

export const postFollow = (follow) => dispatch => (
    FollowApiUtil.postFollow(follow).then(newFollow => dispatch(receiveFollow(newFollow)))
)
export const deleteFollow = (followId) => dispatch => (
    FollowApiUtil.deleteFollow(followId).then((payload) => dispatch(removeFollow(payload)))
)

