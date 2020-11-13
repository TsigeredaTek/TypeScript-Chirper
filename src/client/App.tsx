import * as React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AllChirps from "./components/AllChirps";
import Admin from "./components/Admin";
import AddChirp from "./components/AddChirp";
import Details from "./components/Details";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={AllChirps} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/:id/admin" component={Admin} />
          <Route exact path="/add" component={AddChirp} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
