import React from "react";
import styled from "styled-components";
import { Button, Card, Dialog, TextField } from "@material-ui/core";
import { Close as CancelIcon, Check as SaveIcon } from "@material-ui/icons";
import { format } from "date-fns";
import useSchedule from "./useSchedule";

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

/**
 *
 * @typedef {object} props
 * @property {string} customer
 * @property {Date} date
 * @property {string} type
 * @property {newCustomer: string => void} onCustomerChange
 * @property {newDate: string => void} onDateChange
 * @property {newType: string => void} onTypeChange
 * @property {Function} onCancel
 * @property {Function} onSave
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
    type,
    onCustomerChange,
    onDateChange,
    onTypeChange,
    onCancel,
    onSave,
  } = props;

  const handleCustomerChange = (event) => onCustomerChange(event.target.value);
  const handleDateChange = (event) => onDateChange(event.target.value);
  const handleTypeChange = (event) => onTypeChange(event.target.value);
  return (
    <Dialog open>
      <DialogContent>
        <h1>Please confirm</h1>

        <StyledCard>
          <div>
            <TextField
              label="customer"
              value={customer}
              onChange={handleCustomerChange}
            />
          </div>

          <div>
            <TextField 
              label="type" 
              value={type} 
              onChange={handleTypeChange} 
            />
          </div>

          <div>
            <TextField
              label="Date"
              type="date"
              onChange={handleDateChange}
              value={format(date, "yyyy-MM-dd")}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
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
