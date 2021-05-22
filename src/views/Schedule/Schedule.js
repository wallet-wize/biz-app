import React from 'react';
import {Button} from "@material-ui/core";

const Schedule=()=> {
    return(
        <div>
            <Button variant="contained" href="/AddShoot">Add Shoot</Button>
            <Button variant="contained" href="/AllShoots">Check Schedule</Button>
            </div>
    ) 
}

export default Schedule