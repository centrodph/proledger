import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_CHANGE } from '../actions/ActionTypes';

/**
 * Docs: https://github.com/redux-utilities/flux-standard-action
 * error:
 *    false: no error
 *    string: error information
 * loading :
 *    false: data loaded
 *    true: request in progress
 * data:
 *    {...}
 */
export const INITIAL_STATE = {
  error: false,
  success: false,
  loading: false,
  data: {
    email: '',
    password: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_CHANGE: {
      const { key, value } = action.payload;
      return {
        ...state,
        data: { ...state.data, [key]: value },
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
};
