import React from "react";
import Yelp from "./components/Yelp";
import Map from "./components/Map";
import { AppContainer } from "./components/containers";


class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Yelp></Yelp>
        <Map></Map>
      </AppContainer>
    );
  }
}

export default App;