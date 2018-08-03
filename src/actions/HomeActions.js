
import { LOGIN_CHANGE } from './ActionTypes';

import {
  LINK_HOME,
} from '../utils/Constants';

/**
 * From Google Oauth
 * @param {*} user
 */
export const authenticateUser = user => (dispatch) => {
  window.location = LINK_HOME; // force redirect
};

export const unAuthenticateUser = () => () => {
  window.location = LINK_HOME; // force redirect
};

/**
 * RORO: https://medium.freecodecamp.org/elegant-patterns-in-modern-javascript-roro-be01e7669cbd
 * https://github.com/reduxjs/redux-thunk
 */

/*
*  called when user typing on the signin form
*/
export const loginInputChange = ({ key, value }) => ({
  type: LOGIN_CHANGE,
  payload: { key, value },
});

/**
 *  called when user submit  the signin form
 */
export const loginGoogleRequest = () => async () => {
  window.location = LINK_HOME; // force redirect
};

/**
 *  called when user submit  the signin form
 */
export const loginFormRequest = ({ email, password }) => async (dispatch) => {
  window.location = LINK_HOME; // force redirect
};
