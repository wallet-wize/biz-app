import React from "react";
// import { useState } from "react";
// import ModalDialog from "./views/SignIn/ModalDialog";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Clients from "./views/Clients";
import Photos from "./views/Photos";
import Register from "./views/Register";
import SignIn from "./views/SignIn";
import AddShoot from "./views/AddShoot";
import SingleShoot from "./views/SingleShoot";
import Schedule from "./views/Schedule";
// import Header from "./views/Header";
import { CssBaseline } from "@material-ui/core";

 const App = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/SignIn">
            <SignIn />{" "}
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
          {/* <Route path="/Header">
            <Header />
          </Route> */}
          <Route path="/Clients">
            <Clients />
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
