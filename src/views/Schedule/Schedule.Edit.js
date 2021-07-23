import React from "react";
import styled from "styled-components";
import { Button, Card, Dialog, TextField } from "@material-ui/core";
import {Close as CancelIcon, Check as SaveIcon} from "@material-ui/icons/Remove";
import {format} from 'date-fns'

const DialogContent = styled.div`
  padding: 32px;
`;

const StyledCard = styled(Card)`
  padding: 1rem;
  margin: 1rem;
`;

const ButtonArea = styled.div`
  padding-top: 16px;
`;

const StyledButton = styled(Button)`
  && {
    margin: 0 0.5rem;
  }
`;

const TextFieldWrap = styled.div`
padding: 0.25m 0;

`

/**
 * @typedef {object} props
 * @property {string} customer
 * @property {{newCustomer: string} => void} onCustomerChange
 * @property {function} onCancel
 * @property {function} onSave
 */

/**
 * @title Edit
 * @param {props} props
 * @returns {JSX.Element}
 */

export const Edit = (props) => {
  const {
    customer,
    date,
    Type,
    onCustomerChange,
    onDateChange,
    onTypeChange,
    onCancel,
    onSave,
  } = props;

  const handleCustomerChange = (event) => onCustomerChange(event.target.value);
  const handleTypeChange = (event) => onTypeChange(event.target.value);
  const handleDateChange = (event) => onDateChange(new Date (event.target.value));

  return (
    <Dialog open>
      <DialogContent>
        <h1>Please confirm</h1>

        <StyledCard>
            <TextFieldWrap>
            <TextField
              label="customer"
              value={customer}
              onChange={handleCustomerChange}
            />
            </TextFieldWrap>

          <TextFieldWrap>
          <TextField
            label="Type"
            value={Type} 
            onChange={handleTypeChange}
          />
          </TextFieldWrap>   

          <TextFieldWrap>
          <TextField
            label="Date"
            type="date"
            onChange={handleDateChange}
            value={format(date, ("yyyy-MM-dd"))}
            InputLabelProps={{
              shrink:true,
            }}
          />
          </TextFieldWrap>
         
        </StyledCard>

        <ButtonArea>
          <StyledButton
            startIcon={<CancelIcon />}
            onClick={onCancel}
            variant="contained"
          >
            Cancel
          </StyledButton>

          <StyledButton
            startIcon={<SaveIcon />}
            onClick={onSave}
            variant="contained"
          >
            Save
          </StyledButton>
        </ButtonArea>
      </DialogContent>
    </Dialog>
  );
};

export default Edit;
