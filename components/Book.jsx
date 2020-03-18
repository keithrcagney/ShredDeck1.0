import React from "react";
// import PropTypes from "prop-types";

const Book = props => {
  return (
    <div id="book">
      <p className="verticalText">{props.books.title}</p>
    </div>
  );
};

export default Book;