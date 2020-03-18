//asynchronous action types:
const REQUEST_BOOKS = "REQUEST_BOOKS"
const RECEIVE_BOOKS = "RECEIVE_BOOKS"

const REQUEST_SHREDS = "REQUEST_SHREDS"
const RECEIVE_SHREDS = "RECEIVE_SHREDS"

//synchronous(?) --> if I want to live update the dB, these might need response handling as well
const ADD_BOOK = "ADD_BOOK";
const DELETE_BOOK = "DELETE_BOOK";

const ADD_SHRED = "ADD_SHRED";
const DELETE_SHRED = "DELETE_SHRED";

module.exports = {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  REQUEST_SHREDS,
  RECEIVE_SHREDS,
  ADD_BOOK,
  DELETE_BOOK,
  ADD_SHRED,
  DELETE_SHRED
}
