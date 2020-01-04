export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
import * as SessionApiUtil from '../util/SessionApiUtil'

const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (payload) => ({
  type: RECEIVE_ERRORS,
  payload
});

export const signup = formUser => dispatch =>
         SessionApiUtil.signup(formUser).then(
           payload => dispatch(receiveCurrentUser(payload)),
           payload => dispatch(receiveErrors(payload.responseJSON))
         );
export const login = formUser => dispatch =>
         SessionApiUtil.login(formUser).then(
           payload => dispatch(receiveCurrentUser(payload)),
           payload => dispatch(receiveErrors(payload.responseJSON))
         );
export const logout = () => dispatch =>
         SessionApiUtil.logout().then(
           () => dispatch(logoutCurrentUser()),
           payload => dispatch(receiveErrors(payload.responseJSON))
         );

