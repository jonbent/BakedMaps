export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
import * as SessionApiUtil from '../util/SessionApiUtil'

const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = (payload) => ({
  type: RECEIVE_SESSION_ERRORS,
  payload
});

export const signup = formUserAndHistory => dispatch =>
         SessionApiUtil.signup(formUserAndHistory.formUser).then(
           payload => dispatch(receiveCurrentUser(payload)),
           payload => dispatch(receiveSessionErrors(payload.responseJSON))
         ).then(() => formUserAndHistory.history.go(-2));
export const login = formUserAndHistory => dispatch =>
         SessionApiUtil.login(formUserAndHistory.formUser).then(
           payload => dispatch(receiveCurrentUser(payload)),
           payload => dispatch(receiveSessionErrors(payload.responseJSON))
         ).then(() => formUserAndHistory.history.go(-2));
export const logout = () => dispatch =>
         SessionApiUtil.logout().then(
           () => dispatch(logoutCurrentUser()),
           payload => dispatch(receiveSessionErrors(payload.responseJSON))
         );

