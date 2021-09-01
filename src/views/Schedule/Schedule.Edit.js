import React from "react";
import styled from "styled-components";
import { Button, Card, Dialog, TextField } from "@material-ui/core";
import { Cancel as CloseIcon, Check as CheckIcon } from "@material-ui/icons";
//import AddIcon from "@material-ui/icons/Add";
//import RemoveIcon from "@material-ui/icons/Remove";
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

/**
 *
 * @typedef {object} props
 * @property {string} customer
 * @property {(onCustomerChange: string) => void} onCustomerChange
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
    type,
    onCustomerChange,
    onDateChange,
    onTypeChange,
    onCancel,
    onSave,
  } = props;

  const handleCustomerChange = (event) => onCustomerChange(event.target.value);
  const handleDateChange = (event) =>
    onDateChange(new Date(event.target.value));
  const handleTypeChange = (event) => onTypeChange(event.target.value);

  return (
    <Dialog open>
      <DialogContent>
        <h1>Please confirm</h1>

        <StyledCard>
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
              type={date}
              onChange={handleDateChange}
              value={format(date, "yyyy-MM-dd")}
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
            startIcon={<CheckIcon />}
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
