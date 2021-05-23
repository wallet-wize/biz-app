import React from 'react';
import {Button, TextField} from "@material-ui/core";

const Register =()=> {
    return( <div>
        <h1>Register</h1>
        Email:  <TextField placeholder="e.g dlokweni@gmail.com"/> <br/>
        <br/>
        Password: <TextField placeholder="e.g #12frgutyfG"/> <br/> 
        <br/>
        confirm Password: <TextField placeholder = " e.g #12frgutyfG"/>
        <br/>
        <Button variant="contained" href="/Schedule">Register</Button>
        


    </div>)
}

export default Register