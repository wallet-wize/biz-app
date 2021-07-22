import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card, Dialog, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { format } from "date-fns";
import useSchedule from "./useSchedule";
import Edit from "./Schedule.Edit";
import Delete from "./Schedule.Delete";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
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

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonArea = styled.div`
  padding-top: 16px;
`;

export const Schedule = () => {
  const [{shoots, editing, deleting}, actions] = useSchedule();

  if(editing){
    return (
      <div>
        <Edit
          date={editing.date}
          onDateChange={(newValue) => actions.update('date',newValue)}
          customer="John Smith"
          onCancel={() => actions.edit(null)}
          onCustomerChange={(newValue) => actions.update('customer',newValue)}
          onSave={() => actions.edit(editing.id)}
          type="Test type"
          onTypeChange={(newValue) => actions.update('type',newValue)}
        />
      </div>
    );
  }

  if(deleting){
    return (
      <div>
        <Edit
          customer= {deleting.customer}
          date={deleting.date}
          onCancel={() => actions.delete(null)}
          onCustomerChange={(newValue) => console.log(newValue)}
          onDelete={() => actions.delete(deleting.id)}
          type={deleting.type}
          onTypeChange={(newValue) => console.log(newValue)}
        />
      </div>
    );
  }

  return (
    <Page>
      <List>
        {shoots.map(({ id, customer, date, type }) => {
          return (
            <StyledCard key={id}>
              <div>
                <h1>{customer}</h1>
                <h2>{format(date, "yyyy-MM-dd")}</h2>
                <h3>{type}</h3>

                <ButtonArea>
                  <StyledButton
                    startIcon={<EditIcon />}
                    onClick={() => actions.edit(id)}
                    variant="contained"
                  >
                    EDIT
                  </StyledButton>

                  <StyledButton
                    startIcon={<RemoveIcon />}
                    onClick={() => actions.delete(id)}
                    variant="contained"
                  >
                    DELETE
                  </StyledButton>
                </ButtonArea>
              </div>
            </StyledCard>
          );
        })}
      </List>
    </Page>
  );
};

// const Schedule = () => {
// const [state, action] = useSchedule()


export default Schedule;
