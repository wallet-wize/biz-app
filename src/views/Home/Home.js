import React from "react";
import "./Home.css";
// import 'react-slideshow-image/dist/styles.css'
import { useState } from "react";
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
// import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ModalDialog from "./ModalDialog";


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  // create state variables for each input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = () => {
    window.location.replace("/Schedule");
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    handleNext();
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const SignIn = () => {


  return (
    <div className="body">
      <h1>
        Welcome to Wallet Wize App
        {/* <AccountBalanceWalletOutlinedIcon /> */}
      </h1>

      <img src="photographer.jpg" alt="no" /><br />



      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>
          {/* <Button style={{ color: "navy", fontWeight: "bold" }} variant="contained" onClick={handleClose} href="/">
            Cancel
          </Button> */}
          <Button style={{ color: "navy", fontWeight: "bold" }} type="submit" variant="contained" >
            SignIn
          </Button>
          
          <Button style={{ color: "navy", margin: "4px", fontWeight: "bold" }} variant="contained" href="/Register" onClick={handleOpen}>
        Register
      </Button>
        </div>
      </form>
      {/* <Button style={{ color: "navy", fontWeight: "bold" }} variant="contained" href="/SignIn" onClick={handleOpen}>
        SignIn
      </Button> */}

      

      <Button style={{ color: "navy", fontWeight: "bold" }} variant="contained" href="/Slideshow" onClick={handleOpen}>
        SLIDESHOW
      </Button>
      {/* <ModalDialog open={open} handleClose={handleClose} /> */}
    </div>
  );
};

export default Home