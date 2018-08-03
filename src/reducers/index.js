import { combineReducers } from 'redux';

import AppReducer from './AppReducer';
import HomePageReducer from './HomePageReducer';

export default combineReducers({
  app: AppReducer,
  home: HomePageReducer,
});
