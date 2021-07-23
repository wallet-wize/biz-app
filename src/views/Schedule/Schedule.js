import React from "react";
import styled from "styled-components";
import { Button, Card, Dialog, TextField } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
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

const TextFieldWrap = styled.div`
  padding: 0.5rem 0;
`;

export const Schedule = () => {
  const [{ shoots, alert, editing, deleting, adding }, actions] = useSchedule();

  if (editing) {
    return (
      <div>
        <Edit
          date={editing.date}
          onDateChange={(newValue) => actions.update("date", newValue)}
          type={editing.type}
          onTypeChange={(newValue) => actions.update("type", newValue)}
          customer={editing.customer}
          onCustomerChange={(newValue) => actions.update("customer", newValue)}
          onCancel={() => actions.edit(null)}
          onSave={actions.edit(editing.id)}
        />
      </div>
    );
  }

  if (deleting) {
    return (
      <Delete
        customer={deleting.customer}
        date={deleting.date}
        type={deleting.type}
        onCancel={() => actions.delete(null)}
        onDelete={() => actions.delete(deleting.id)}
      />
    );
  }

  if (adding){
    return (
      <Add
      date={adding.date}
      onDateChange={(newValue) => actions.update("date", newValue)}
      type={adding.type}
      onTypeChange={(newValue) => actions.update("type", newValue)}
      customer={adding.customer}
      onCustomerChange={(newValue) => actions.update("customer", newValue)}
      onCancel={() => actions.add(false)}
      onSave={() => actions.add()}
      alert={alert}
      />
    )
  }

  return (
    <Page>
      <h1>Schedule</h1>
      <StyledButton
        startIcon={<DeleteIcon />}
        onClick={() => actions.add(true)}
        variant="contained"
      >
        Add Shoot
      </StyledButton>

      <List>
        {shoots.map(({ id, customer, date, type }) => {
          return (
            <StyledCard key={id}>
              <div>
                <h1>{customer}</h1>
                <h2>{format(date, "d MMMM yyyy")}</h2>
                <h3>{type}</h3>

                <ButtonArea>
                  <StyledButton
                    startIcon={<EditIcon />}
                    onClick={() => actions.edit(id)}
                    variant="contained"
                  >
                    EDIT
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

export default Schedule;
