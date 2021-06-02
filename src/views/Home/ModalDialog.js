import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Register from "../Register/Register";
//import RegisterLogIn from "./RegisterLogIn";

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      {/* // Register to be created */}
      <Register handleClose={handleClose} />
      {/* <FormLogIn handleClose={handleClose} /> */}
     
    </Dialog>
  );
};

export default ModalDialog;
