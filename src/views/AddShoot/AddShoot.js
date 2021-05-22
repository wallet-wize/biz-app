import React from 'react';
import {Button, TextField} from "@material-ui/core";

const AddShoot=()=> {
    return (
        <div>
            <h3>Client details</h3>
           Name: <TextField placeholder="e.g Thato" /><br/>
           <br/>
           Phone Number: <TextField variant="outlined" placeholder="078123456" /> <br/>
           <br/>
           Email Address: <input type = "textfield" placeholder ="thato@gmail.com"/><br/>


           <h3>Shoot details:</h3>
       
           Date: <input type="date" placeholder="dd/m/year" /><br/>
           <br/>

           Time: <input type = "time" placeholder ="10h00"/><br/>
           <br/>
           Location: <input type = "location" placeholder = "sila!"/><br/>
           <br/>

           <h3>Activities:</h3>
           <input type = "textarea" />

           <h3>Prices:</h3>
           Deposit: <input type = "text"/><br/>
           <br/>
           Balance: <input type = "text"/><br/>
           <br/>
           Expenses: <input type = "text"/><br/>
           <br/>

           <Button variant="contained" href="/AllShoots">Add Shoot</Button>


            </div>
    ) 
}

export default AddShoot