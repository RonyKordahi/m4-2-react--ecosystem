//methods
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//components
import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
import ItemDetails from "./ItemDetails"

function App(props) {
  return <>
  <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/"><Homepage></Homepage></Route>
        <Route exact path="/about"><About></About></Route>
        <Route exact path="/items/:itemID"><ItemDetails></ItemDetails></Route>
      </Switch>
    </Router>
  </>;
}

export default App;