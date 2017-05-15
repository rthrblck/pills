/* @flow */
import { combineReducers } from 'redux';

import drawer from './drawer';
import user from './user';
import list from './list';
import search_med from './search_med';

export default combineReducers({
  drawer,
  user,
  list,
  search_med,
});
