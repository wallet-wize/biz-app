import React from 'react';
import {Button} from "@material-ui/core";

const AllShoots=()=> {
    return (
    <div>
        <h2>All Shoots</h2> 
        <br />
        <a href="/AddShoots">back</a>
        <br/>
        <Button variant="contained">UPDATE</Button>
        <Button variant="contained">DELETE</Button>
    </div>
    )
}

export default AllShoots