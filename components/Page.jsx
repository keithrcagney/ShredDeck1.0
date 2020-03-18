// //the page will have a means of requesting the shreds from the database stored at the book ID;
// import React from "react";
// import * as actions from "../actions/actions";

// class Page extends Component{
//   constructor(props){
//     super(props);
//     state = {};
//   }

//   componentDidMount() {
//     const {store} = this.props;
//     store.dispatch(fetchShreds('/:id'))

//     const {shreds} = store.getState();
//     this.setState({shreds});
//     const {isFetching} = store.getState();
//     this.setState({isFetching});

//     this.unsubscribe = store.subscribe(() => {
//       const {shreds} = store.getState();
//       this.setState({shreds});
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe()
//   }

//   render (){
//       return (
//       <div className="page_display">
//         {props.shreds}
//         <input
//           type="text"
//           placeholder="shred here..."
//         ></input>
//         <input
//           id="shredField"
//           type="button"
//           value="Add shred"
//           onClick={() => {
//             store.dispatch(addShred(document.getElementById('shredField').value));
//           }}
//         ></input>
//       </div>
//     );
//   }
// };

// module.exports = {
//   Page
// }