import React from "react";
import "./Home.css";
import { Button } from "@material-ui/core";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";

const Home = () => {
  return (
    <div>
      <h1>
      Welcome to Wallet Wize App
        <AccountBalanceWalletOutlinedIcon />
     </h1>
      <Button variant="contained" href="/SignIn">
        SignIn
      </Button>

      <Button variant="contained" href="/Register">
        Register
      </Button>
    </div>
  );
};

export default Home