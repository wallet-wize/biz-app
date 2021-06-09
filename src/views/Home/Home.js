import React from "react";
import "./Home.css";
import { useState } from "react";
import { Button } from "@material-ui/core";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ModalDialog from "./ModalDialog";




const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="body">
      <h1>
      Welcome to Wallet Wize App
        <AccountBalanceWalletOutlinedIcon />
     </h1>
     
     <img src="photographer.jpg" alt ="no"/><br/>

      <Button style={{ color: "navy", fontWeight: "bold"}} variant="contained" href="/SignIn" onClick={handleOpen}>
        SignIn
      </Button>

      <Button style={{ color: "navy", margin: "4px", fontWeight: "bold" }} variant="contained" href="/Register" onClick={handleOpen}>
        Register
      </Button>
      {/* <ModalDialog open={open} handleClose={handleClose} /> */}
    </div>
  );
};

export default Home