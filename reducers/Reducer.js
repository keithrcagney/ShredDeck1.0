const booksReducer = (
  state = {
    isFetching: false,
    books: []
  }, action) => {
  switch (action.type) {
    case 'REQUEST_BOOKS':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_BOOKS':
      return Object.assign({}, state, {
        isFetching: false,
        books: action.payload
      })
    case 'ADD_BOOK':
      let bookArray = state.books;
      bookArray.push(action.payload);
      return Object.assign({}, state, {
        books: bookArray
      })
    case 'DELETE_BOOK':
      let bookArray2 = state.books;
      bookArray2.splice(bookArray2.length-1, 1);
      return Object.assign({}, state, {
        books: bookArray2
      })
    default:
      return state
  }
};

const shredsReducer = (
  state = {
    isFetching: false,
    book_id: null,
    shreds: []
  }, action) => {
  switch (action.type) {
    case 'REQUEST_SHREDS':
      return Object.assign({}. state, {
        isFetching: true,
      });
    case 'RECEIVE_SHREDS':
      return Object.assign({}, state, {
        isFetching: false,
        shreds: action.payload
      })
    case 'ADD_SHRED':
      let currentShreds = state.shreds;
      currentShreds.push(action.payload);
      return Object.assign({}, state, {
        shreds: currentShreds
      })
    case 'DELETE_SHRED':
      let currentShreds2 = state.shreds;
      for (let el of currentShreds2){
        if (el._id === action.payload){
          currentShreds2 = currentShreds2.splice(currentShreds2.indexOf(el), 1);
        }
      }
      return Object.assign({}, state, {
        shreds: currentShreds2
      })
    default:
      return state
  }
};

module.exports = {
  booksReducer,
  shredsReducer
}