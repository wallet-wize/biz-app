import React from 'react';
import {Button, TextField} from "@material-ui/core";

const AddShoot=()=> {
    return (
        <div>
            <h3>Client details</h3>
           Name: <TextField variant="outlined" placeholder="e.g Thato" /><br/>
           <br/>
           Phone Number: <TextField variant="outlined" placeholder="078123456" /> <br/>
           <br/>
           Email Address: <TextField variant = "outlined" placeholder ="thato@gmail.com"/><br/>


           <h3>Shoot details:</h3>
       
           Date: <input type="date" placeholder="dd/m/year" /><br/>
           <br/>

           Time: <input type = "time" placeholder ="10h00"/><br/>
           <br/>
           Location: <TextField variant="outlined" placeholder = "sila!"/><br/>
           <br/>

           <h3>Activities:</h3>
           <TextField variant="outlined" />

           <h3>Prices:</h3>
           Deposit: < TextField variant="outlined"/><br/>
           <br/>
           Balance: <TextField variant="outlined"/><br/>
           <br/>
           Expenses: <TextField variant="outlined"/><br/>
           <br/>

           <Button variant="contained" href="/AllShoots">Add Shoot</Button>


            </div>
    ) 
}

export default AddShoot