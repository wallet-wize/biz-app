import React from "react";
import { Button, TextField } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";

const AddShoot = () => {
  //const [showShoot, setShowShoot] = useState("addShoot")
  return (
    <div>
      <h2>Add Shoot</h2>
      <br /> 
        <a href="/">Home </a>
      <h3>Client details</h3>
      Name: <TextField variant="outlined" placeholder="e.g Thato" />
      <br />
      <br />
      Phone Number: <TextField
        variant="outlined"
        placeholder="0781234560"
      />{" "}
      <br />
      <br />
      Email Address:{" "}
      <TextField variant="outlined" placeholder="thato@gmail.com" />
      <br />
      <br />

      <h3>Shoot details:</h3>
      <CalendarTodayOutlinedIcon />{" "}
      <input type="date" placeholder="dd/mm/year" />
      <br />
      <br />
      <AccessTimeOutlinedIcon /> <input type="time" />
      <br />
      <br />
      <LocationOnOutlinedIcon />{" "}
      <TextField variant="outlined" placeholder="sila!" />
      <br />
      <br />

      <h3>Activities:</h3>
      <TextField variant="outlined" />
      <h3>Prices:</h3>
      Deposit: <TextField variant="outlined" />
      <br />
      <br />
      Balance: <TextField variant="outlined" />
      <br />
      <br />
      Expenses: <TextField variant="outlined" />
      <br />
      <br />

      <Button variant="contained" href="/AllShoots">
        Add Shoot
      </Button>
    </div>
  );
};

export default AddShoot;
