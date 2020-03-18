import React, { Component } from "react";
import MainContainer from "./components/MainContainer.jsx";
import MainDisplay from "./components/MainContainer.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  //in normal React, I could add setState methods to augment number of books and shreds here, or add to a total book count to display.
  //RESOLVE: if I am using the store for my props and passing that around (to review connections/prop drilling), what is happening with my dB afterward?
  //flow: fetching from DB on load-in, figure out what to send to get it to render correctly
  //BUNDLE THE CSS stylesheet

  render(){
    return(
    <div>
      <MainDisplay>
        <MainContainer/>
      </MainDisplay>
    </div>
    )
  }
};

export default App;