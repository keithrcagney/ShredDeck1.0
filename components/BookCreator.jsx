import React from "react";

const BookCreator = props => (
  <div>
    <p>Enter a new book title</p>
    <input id="titleField" type="text"></input>
    <input
      type="button"
      value="Add Book"
      onClick={() => {
        props.onAddBook(document.getElementById("titleField").value);
      }}
    ></input>
    <hr></hr>
  </div>
);

// const useInput = init => {
//   const [ value, setValue ] = useState(init);
//   const onChange = e => {
//     setValue(e.target.value);
//   }
//   // return the value with the onChange function instead of setValue function
//   return [ value, onChange ];
// }

export default BookCreator;