import React from "react";
import { Button, TextField, TextareaAutosize } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import { Grid, Typography } from "@material-ui/core";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";

const AddShoot = () => {
  //const [showShoot, setShowShoot] = useState("addShoot")
  const [value, setValue] = React.useState(100);

  return (
    <div className="body">
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
      <hr />
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
      <hr />
      <h3>Activities:</h3>
      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={3}
        placeholder="Type of shoot you want"
      />
      <br />
      <hr />
      
      <h3>Prices:</h3>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom={true}>
            Deposit
          </Typography>
          <CurrencyTextField
            label="Amount"
            variant="outlined"
            value={value}
            currencySymbol="R"
            onChange={(event, value) => setValue(value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom={true}>
            Balance
          </Typography>
          <CurrencyTextField
            label="Amount"
            variant="outlined"
            value={value}
            currencySymbol="R"
            onChange={(event, value) => setValue(value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" gutterBottom={true}>
            Expense
          </Typography>
          <CurrencyTextField
            label="Amount"
            variant="outlined"
            value={value}
            currencySymbol="R"
            onChange={(event, value) => setValue(value)}
          />
        </Grid>
      </Grid>

      <br />

      <Button variant="contained" href="/AllShoots">
        Add Shoot
      </Button>
    </div>
  );
};

export default AddShoot;
