import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Error from './pages/Error'
import SingleCocktail from "./pages/SingleCocktail";
import About from "./pages/About";


const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/"> <Home /> </Route> 
      <Route path="/about"> <About /> </Route> 
      <Route path="*"> <Error /> </Route> 
    </Switch>
    </Router>
  )
}

export default App