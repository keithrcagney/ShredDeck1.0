import React from "react";
import Book from "./Book.jsx";

const BookShelf = props => {
  const booksToDisplay = [];
  for (let i = 0; i < props.books.length; i++) {
    let singleBook = props.books[i];
    booksToDisplay.push(<Book shreds={props.shreds}><p>{singleBook.title}</p></Book>);
  }

  return (
    <div className="bookShelf">
      <hr></hr>
      <div className="shelfBacker">
        {booksToDisplay}
      </div>
      <hr></hr>
    </div>
  );
};

export default BookShelf;
