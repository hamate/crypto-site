import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import watchListReducer from './watchListReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  session: sessionReducer,
  user: userReducer,
  watchList: watchListReducer,
});

export default rootReducer;
