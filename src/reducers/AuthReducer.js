import { AUTH_SUCCESS, AUTH_FAILURE } from '../actions/ActionTypes';
/**
 * Docs: https://github.com/redux-utilities/flux-standard-action
 * islogged :
 *    true: Means user is logged in!
 *    false: Means user is not logged in!*
 * data:
 *    {...} Keep user information
 */
export const INITIAL_STATE = {
  islogged: null,
  data: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return {
        islogged: true,
        data: { ...action.payload },
      };
    }
    case AUTH_FAILURE: {
      return {
        islogged: false,
        data: {},
      };
    }
    default:
      return state;
  }
};
