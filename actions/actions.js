import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  REQUEST_SHREDS,
  RECEIVE_SHREDS,
  ADD_BOOK,
  DELETE_BOOK,
  ADD_SHRED,
  DELETE_SHRED
} from "../actions/actionTypes";

//synchronous action creators
export const requestBooks = () => {
  return {
    type: REQUEST_BOOKS,
  }
};

export const receiveBooks = (books) => {
  return {
    type: RECEIVE_BOOKS,
    payload: [...books]
  }
};

//THUNK ACTION CREATOR
export const fetchBooks = () => {
  return function(dispatch){
    dispatch(requestBooks())
    return fetch('/')
    .then(res => res.json())
    .then(console.log("THUNK ACTION CREATOR - FETCH BOOKS"))
    .then((results) => {
      dispatch(receiveBooks(results));
    })
  }
}

//shred synchronous action creators
export const requestShreds = () => {
  return {
    type: REQUEST_SHREDS
  }
};

export const receiveShreds = (shreds) => {
  return {
    type: RECEIVE_SHREDS,
    payload: [...shreds]
  }
};

//re: above
//-- from "redux.js.org/advanced/async-actions" tutorial: is this how I would display those props on the children? (would need "json" added as second param above)
//posts: json.data.children.map(child => child.data),
//receivedAt: Date.now();

//THUNK ACTION CREATOR
export function fetchShreds(){
  return function(dispatch){
    dispatch(requestShreds());
    console.log("THUNK ACTION - Shreds");
    return fetch('/:id')
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    )
    .then(data =>
      dispatch(receiveShreds(data))
    )
  }
}

//these probably need response handling, too, unless I set a sync feature that automatically saves after a timeout.
export const addBook = (bookTitle) => ({
  type: ADD_BOOK,
  payload: bookTitle
});

export const deleteBook = (_id) => ({
  type: DELETE_BOOK,
  payload: _id
});

export const addShred = (shredText) => {
  return {
    type: ADD_SHRED,
    payload: shred
  }
};

export const deleteShred = (shred) => {
  return {
  type: DELETE_SHRED,
  payload: shred
  }
};