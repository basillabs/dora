import { combineReducers } from 'redux';
import BaseNavigation from '../Router';
import tourReducer from './tourReducer';
import locationReducer from './locationReducer';
import locationListReducer from './locationListReducer';

export default combineReducers({
  tourReducer,
  locationReducer,
  locationListReducer,
  navigation: (state, action) => BaseNavigation.router.getStateForAction(action, state),
  state: (state = {}) => state,
});
