import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { createGlobalStyle } from "styled-components";

import Home from "./views/Home";
import Clients from "./views/Clients";
import Photos from "./views/Photos";
import Register from "./views/Register";
import SignIn from "./views/SignIn";
import AddShoot from "./views/AddShoot";
import SingleShoot from "./views/SingleShoot";
import Schedule from "./views/Schedule";
import Slideshow from "./views/Slideshow";

const Global = createGlobalStyle`
body{
  background-color: lavender;
  color: navy;
  //height: 100vh;
  //height: 550px;
  //width: 100px;
   margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: theme.spacing(4);
}
button:hover{
  background-color:lavender
}
`;

const App = () => {
  return (
    <>
      <CssBaseline />
      <Global />
      <BrowserRouter>
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>

          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/Schedule">
            <Schedule />
          </Route>

          <Route path="/AddShoot">
            <AddShoot />
          </Route>

          <Route path="/SingleShoot">
            <SingleShoot />
          </Route>

          <Route path="/Photos">
            <Photos />
          </Route>
         
          <Route path="/Clients">
            <Clients />
          </Route>

          <Route path="/Slideshow">
            <Slideshow />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
