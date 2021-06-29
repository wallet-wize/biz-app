import React from "react";
import styled from "styled-components";
import { Button, TextField, TextareaAutosize } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import { Grid, Typography } from "@material-ui/core";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
// import localData from "./api/localData";

const Title = styled.h2`
  padding-bottom: 100px;
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 200px;
  }
`;

const AddShoot = () => {
  //const [showShoot, setShowShoot] = useState("addShoot")
  const [value, setValue] = React.useState(100);

  return (
    <div className="body">
      <h2>Add Shoot</h2>
      
      
      <h3>Client details</h3>
      Name: <StyledTextField variant="outlined" placeholder="e.g Thato" />
      Phone Number: < StyledTextField
        variant="outlined"
        placeholder="0781234560"
      />
      Email Address:{" "}
      <StyledTextField variant="outlined" placeholder="thato@gmail.com" />
      
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
      < StyledTextField variant="outlined" placeholder="sila!" />
      <hr />
      <h3>Activities:</h3>
      <TextareaAutosize
        aria-label="empty textarea"
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
      <Button variant="contained" href="/Schedule">
        Add Shoot
      </Button>
      <a href="/" style={{color:"navy"}}>Home </a>
    </div>
  );
};

export default AddShoot;
