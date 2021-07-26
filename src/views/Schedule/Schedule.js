import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card} from "@material-ui/core";
import {Edit as EditIcon, Delete as DeleteIcon} from "@material-ui/icons";
import RemoveIcon from "@material-ui/icons/Remove";
import { format } from "date-fns";
import useSchedule from "./useSchedule";
import Edit from "./Schedule.Edit";
import Delete from "./Schedule.Delete";
import Add from "./Schedule.Add";

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
  const [{shoots, alert, editing, deleting, adding}, actions] = useSchedule();

  if(editing){
    return (
      <div>
        <Edit
          date={editing.date}
          onDateChange={(newValue) => actions.update('date',newValue)}
          customer={editing.customer}
          onCancel={() => actions.edit(null)}
          onCustomerChange={(newValue) => actions.update('customer',newValue)}
          onSave={() => actions.edit(editing.id)}
          type={editing.type}
          onTypeChange={(newValue) => actions.update('type',newValue)}
        />
      </div>
    );
  }

  if(deleting){
    return (
      <div>
        <Delete
          customer= {deleting.customer}
          date={deleting.date}
          onCancel={() => actions.delete(null)}
          onDelete={() => actions.delete(deleting.id)}
          type={deleting.type}
        />
      </div>
    );
  }

  if(adding){
    return (
      <div>
        <Add
          date={adding.date}
          onDateChange={(newValue) => actions.update('date',newValue)}
          customer={adding.customer}
          onCancel={() => actions.add(null)}
          onCustomerChange={(newValue) => actions.update('customer',newValue)}
          onSave={() => actions.add(adding.id)}
          type={adding.type}
          onTypeChange={(newValue) => actions.update('type',newValue)}
          alert = {alert}
        />
      </div>
    );
  }

  return (
    <Page>
      <h1>Schedule</h1>
      <StyledButton
        startIcon={<EditIcon />}
        onClick={() => actions.add(true)}
        variant="contained"
      >
        ADD SHOOT
      </StyledButton>

      <List>
        {shoots.map(({ id, customer, date, type }) => {
          return (
            <StyledCard key={id}>
              <div>
                <h1>{customer}</h1>
                <h3>{type}</h3>
                <h2>{format(date, "yyyy-MM-dd")}</h2>
                

                <ButtonArea>
                  <StyledButton
                    startIcon={<EditIcon />}
                    onClick={() => actions.edit(id)}
                    variant="contained"
                  >
                    EDIT
                  </StyledButton>

                  <StyledButton
                    startIcon={<DeleteIcon />}
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
