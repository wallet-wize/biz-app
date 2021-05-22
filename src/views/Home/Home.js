import React from "react";
import {Button} from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <h1>Wallet Wize</h1>
      <img src="budget.jpg" alt="no" /> <br/>
      <br/>
      <Button variant='contained' href="/SignIn">SignIn</Button>
     
      <Button variant ="contained" href="/Register">Register</Button>
    </div>
  );
};
export default Home;
