import React from 'react';
import {Button} from "@material-ui/core";

const Register =()=> {
    return( <div>
        <h1>Register</h1>
        Email:  <input type = "textfield" placeholder="e.g dlokweni@gmail.com"/> <br/>
        <br/>
        Password: <input type = "textfield" placeholder="e.g #12frgutyfG"/> <br/> 
        <br/>
        confirm Password: <input type = "textfield" placeholder = " e.g #12frgutyfG"/>
        <br/>
        <Button variant="contained" href="/Schedule">Register</Button>
        


    </div>)
}

export default Register