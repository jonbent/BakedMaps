export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_AND_EXTRAS = "RECEIVE_USER_AND_EXTRAS";

import * as UserApiUtil from '../util/UserApiUtil'

export const receiveUser = (payload) => ({
    type: RECEIVE_USER,
    payload
})
export const receiveUserAndExtras = (payload) => ({
    type: RECEIVE_USER_AND_EXTRAS,
    payload
})

export const fetchUserInfo = (username, extraInfo = false) => dispatch => {
    if (extraInfo) return UserApiUtil.fetchUserInfo(username, extraInfo).then(payload => dispatch(receiveUserAndExtras(payload)))
    return UserApiUtil.fetchUserInfo(username).then(payload => dispatch(receiveUser(payload)))
}