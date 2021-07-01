import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
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

const ButtonArea = styled.div`
  padding-top: 16px;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
          onSave={() => actions.edit(editing.id)}
          onCancel={() => actions.edit(null)}
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

  if (adding) {
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
    );
  }

  return (
    <Page>
      <h1>Schedule</h1>

      <StyledButton
        startIcon={<AddIcon />}
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

export default Schedule;
