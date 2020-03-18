import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions/actions.js";
import BookCreator from "./BookCreator.jsx";
import BookShelf from "./Bookshelf.jsx";
import store from "../src/index.js"
import { render } from 'react-dom';
import {fetchBooks, addBook, deleteBook} from "../actions/actions.js"

const mapStateToProps = (state) => {
  return {
    books: state.books,
    shreds: state.shreds
  }
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (bookTitle) => dispatch(actions.addBook(bookTitle)),
  deleteBook: (_id) => dispatch(actions.deleteBook(_id)),
  addShred: (shredText) => dispatch(actions.addShred(shredText)),
  deleteShred: (_id) => dispatch(actions.deleteShred(_id))
});

class MainContainer extends Component {
  constructor(props){
    super(props);
    //local state no longer necessary; implemented Redux store
    // state = {
    //   books: [],
    //   shreds: [],
    //   isFetching: false
    // };
  }

  componentMount(){
    store.dispatch(fetchBooks());
  }
    // .then(data => {
    //   this.setState({books: data});
    // }));
    // store.dispatch(fetchShreds('/:id').then(data => {
    //   this.setState({shreds: data});
    // }));
    // this.unsubscribe = store.subscribe(() => {
    // const {books} = store.getState()
    // this.setState({books})

  // componentWillMount() {
  //   const {store} = this.props
  //   store.dispatch(fetchBooks('/'));
  //   const {books, shreds} = store.getState();
  //   this.setState({books, shreds, isFetching: true});
  // };

  // componentWillUnmount() {
  //   this.unsubscribe()
  // };

  onAddBook(bookTitle) {
    store.dispatch(addBook(bookTitle));
  }

  onDeleteBook(_id) {
    store.dispatch(deleteBook(_id));
  }

  render(){
    const shelf1 = [];
    const shelf2 = [];
    const shelf3 = [];

    for (let i = 0; i < props.books.length; i++) {
      let book = props.books[i];
      if (book[row] === 1){
        shelf1.push( <Book
          id={book._id}
          title={book.title}
          shreds={props.shreds}
        /> );
      } else if (book[row] === 2){
        shelf2.push( <Book
          id={book._id}
          title={book.title}
          shreds={props.shreds}
        /> );
      } else if (book[row] === 3){
        shelf3.push( <Book
          id={book._id}
          title={book.title}
          shreds={props.shreds}
        /> );
      }
    }
    //If using React Router, use these switches: Router switch ('/'), Router switch('/:id') 
    // if (this.state.isFetching) {
    //   return (
    //   <div>
    //     <h1>Loading your shreds, please wait...</h1>
    //   </div>
    //   );
    // };

    return (
      <div className="container">
        <h1>Welcome to your Shredshelf</h1>
        <p>You have {this.props.books.length} Shredbooks in your collection.</p>
        <div className="bookCreator">
            <BookCreator onAddBook={this.props.onAddBook}/>
        </div>
        <div className="shelves">
          <BookShelf
            row={1}
            books={shelf1}
            shreds={this.props.shreds}
          />
          <BookShelf
            row={2}
            books={shelf2}
            shreds={this.props.shreds}
          />
          <BookShelf
            row={3}
            books={shelf3}
            shreds={this.props.shreds}
          />
        </div>
      </div>
    );
  }
}

// books={this.state.books} onAddBook={this.state.onAddBook} onDeleteBook={this.state.onDeleteBook}

const MainDisplay = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export {MainDisplay};