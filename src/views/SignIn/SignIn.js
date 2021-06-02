import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

const SignIn = ({ handleClose }) => {
  const classes = useStyles();

  // create state variables for each input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    handleClose();
  };


  return (
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
        <Button variant="contained" onClick={handleClose} href="/">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" href="/Schedule">
          SignIn
        </Button>
      </div>
    </form>
  );
};

export default SignIn;






// import React from 'react';
// import {Button, TextField} from "@material-ui/core";

// const Register =()=> {
//     return( <div>
//         <h1>Register</h1>
//         Email:  <TextField placeholder="e.g dlokweni@gmail.com"/> <br/>
//         <br/>
//         Password: <TextField placeholder="e.g #12frgutyfG"/> <br/> 
//         <br/>
//         confirm Password: <TextField placeholder = " e.g #12frgutyfG"/>
//         <br/>
//         <Button variant="contained" href="/Schedule">Register</Button>
        


//     </div>)
// }

// export default Register


// import React from 'react';
// import {Button, TextField} from "@material-ui/core";

// const SignIn =()=> {
//     return ( 
//     <div>
//         <form> 
//         <h1>SignIn</h1>
//         Email Address: <TextField variant="outlined" placeholder="Thato@gmail.com"/><br/>
//         <br/>
//         Password: <TextField variant="outlined" placeholder="#12wftG"/><br/>
//         <br/>
//         <Button variant ="contained" href="Schedule">Sign In</Button>

// </form>


//     </div>
//     )
// }

// export default SignIn