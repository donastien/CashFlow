import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import dashboard from './dashboard';
import load from './load';

export default combineReducers({
  alert,
  auth,
  dashboard,
  load
});
