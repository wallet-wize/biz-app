import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card, Dialog, TextField } from "@material-ui/core";
import { Cancel as CloseIcon } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import { format } from "date-fns";

const DialogContent = styled.div`
  padding: 32px;
`;

const StyledCard = styled(Card)`
  padding: 1rem;
  margin: 1rem;
`;

const StyledButton = styled(Button)`
  && {
    margin: 0 0.5rem;
  }
`;

const ButtonArea = styled.div`
  padding-top: 16px;
`;

const TextFieldWrap = styled.div`
  padding: 0.5rem 0;
`;

export const Add = (props) => {
  const {
    customer,
    date,
    type,
    onCustomerChange,
    onDateChange,
    onTypeChange,
    onCancel,
    onSave,
    alert,
  } = props;

  const handleCustomerChange = (event) => onCustomerChange(event.target.value);
  const handleTypeChange = (event) => onTypeChange(event.target.value);
  const handleDateChange = (event) =>
    onDateChange(new Date(event.target.value));

  return (
    <Dialog open>
      <DialogContent>
        <h1>Enter details:</h1>

        <StyledCard>
          {alert}
          <TextFieldWrap>
            <TextField
              label="Customer"
              value={customer}
              onChange={handleCustomerChange}
            />
          </TextFieldWrap>

          <TextFieldWrap>
            <TextField label="Type" value={type} onChange={handleTypeChange} />
          </TextFieldWrap>

          <TextFieldWrap>
            <TextField
              label="Date"
              type="date"
              onChange={handleDateChange}
              // value={format(date, "yyyy-MM-dd")}
              value={date ? format(date, "yyyy-MM-dd") : undefined}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </TextFieldWrap>
        </StyledCard>

        <ButtonArea>
          <StyledButton
            startIcon={<CloseIcon />}
            onClick={onCancel}
            variant="contained"
          >
            Cancel
          </StyledButton>

          <StyledButton
            startIcon={<AddIcon />}
            onClick={onSave}
            variant="contained"
          >
            Add
          </StyledButton>
        </ButtonArea>
      </DialogContent>
    </Dialog>
  );
};

export default Add;
