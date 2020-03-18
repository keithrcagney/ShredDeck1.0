import { combineReducers } from 'redux';
import { booksReducer, shredsReducer } from './Reducer';

const reducers = combineReducers({
  books: booksReducer,
  shreds: shredsReducer
});

export default reducers;