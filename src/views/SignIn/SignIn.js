import React from 'react';
import {Button, TextField} from "@material-ui/core";

const SignIn =()=> {
    return ( 
    <div>
        <h1>SignIn</h1>
        Email Address: <TextField variant="outlined" placeholder="Thato@gmail.com"/><br/>
        <br/>
        Password: <TextField variant="outlined" placeholder="#12wftG"/><br/>
        <br/>
        <Button variant ="contained" href="Schedule">Sign In</Button>




    </div>
    )
}

export default SignIn