import React from "react";
import styled from "styled-components";
import { Button, Card, Dialog, TextField } from "@material-ui/core";
import {Close as CancelIcon, Add as SaveIcon} from "@material-ui/icons/Remove";
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

const TextFieldWrap = styled.div `
    padding: 0.5rem 0;
    
`

export const Add = (props) => {

    const {
        customer,
        date,
        Type,
        onCustomerChange,
        onDateChange,
        onTypeChange,
        onCancel,
        onSave,
        alert,
      } = props;
    
    const handleCustomerChange = (event) => onCustomerChange(event.target.value);
    const handleTypeChange = (event) => onTypeChange(event.target.value);
    const handleDateChange = (event) => onDateChange(new Date (event.target.value));
    return (
        <Dialog open>
          <DialogContent>
            <h1>Enter Details</h1>
    
            <StyledCard>
                <textFieldWrap>
                <TextField
                  label="customer"
                  value={customer}
                  onChange={handleCustomerChange}
                />
                </textFieldWrap>
    
              <textFieldWrap>
              <TextField label="Type" value={Type} onChange={handleTypeChange}/>
              </textFieldWrap>   
    
              <textFieldWrap>
              <TextField
                label="Date"
                type="date"
                onChange={handleDateChange}
                value={date ? format(date, "yyyy-MM-dd") : undefined}
                InputLabelProps={{
                  shrink:true,
                }}
              />
              </textFieldWrap>     
            </StyledCard>
            (alert)
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
                Add
              </StyledButton>
            </ButtonArea>
          </DialogContent>
        </Dialog>
      );
}

export default Add


