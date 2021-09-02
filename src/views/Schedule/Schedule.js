import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Card, Select, MenuItem, TextField } from "@material-ui/core";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
// import SearchIcon from "@material-ui/icons/Search";
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

const Controls = styled.div`
  padding: 1rem;
`;

const applySorting = (shoots, sorting, search) => {
  const filteredShoots =
    search.length < 3
      ? shoots
      : shoots.filter(
          ({ customer, type }) =>
            new RegExp(search, "i").test(customer) ||
            new RegExp(search, "i").test(type)
        );

  if (sorting === "date-closest-furthest") {
    return filteredShoots.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  if (sorting === "date-furthest-closest") {
    return filteredShoots.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  throw new Error("Invalid sorting supplied");
};

export const Schedule = () => {
  const [{ shoots, alert, editing, deleting, adding }, actions] = useSchedule();
  const [sorting, setSorting] = useState("date-closest-furthest");
  const [search, setSearch] = useState("");
  const [displayedShoots, setDisplayedShoots] = useState(
    applySorting(shoots, sorting, search)
  );

  useEffect(() => {
    setDisplayedShoots(applySorting(shoots, sorting, search));
  });

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

      <Controls>
        <TextField
          variant="outlined"
          label="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Controls>

      <Controls>
        <Select
          value={sorting}
          variant="outlined"
          onChange={(event) => {
            if (!event.target.value || typeof event.target.value !== "string")
              throw new Error("No value on selection");
            setSorting(event.target.value);
          }}
        >
          <MenuItem value="date-closest-furthest">
            Date (Closest - Furthest)
          </MenuItem>

          <MenuItem value="date-furthest-closest">
            Date (Furthest - Closest)
          </MenuItem>
        </Select>
      </Controls>

      <List>
        {displayedShoots.map(({ id, customer, date, type }) => {
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

      <ButtonArea>
        <StyledButton href="/" variant="contained">
          Back
        </StyledButton>
      </ButtonArea>
    </Page>
  );
};

export default Schedule;
