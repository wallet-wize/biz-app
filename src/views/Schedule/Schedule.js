import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card, Dialog, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import faker from "faker";
import fakerE from "faker-extra";
import { format } from "date-fns";
//import { Grid } from "@material-ui/core";

const SHOOT_TYPES = ["Wedding", "Babyshower", "Profile", "Birthday"];

const FAKE_PROPS = {
  shoots: fakerE.array(20, () => ({
    id: faker.datatype.uuid(),
    customer: faker.name.findName(),
    date: faker.date.future(),
    type: faker.random.arrayElement(SHOOT_TYPES),
  })),
};

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

const DialogContent = styled.div`
  padding: 32px;
`;

const Schedule = () => {
  const [shoots, setShoots] = useState(FAKE_PROPS.shoots);
  const [deleting, setDeleting] = useState(null);
  const [editing, setEditing] = useState(null);

  const handleEdit = (id) => {
    if (!editing) {
      return setEditing(shoots.find((singleShoot) => singleShoot.id === id));
    }

    const newShoots = shoots.map((singleShoot) => {
      if (singleShoot.id !== id) return singleShoot;
      return {
        ...singleShoot,
        customer: editing.customer,
      };
    });

    setShoots(newShoots);
    setEditing(null);
  };

  const handleDelete = (id) => {
    if (!deleting)
      return setDeleting(shoots.find((singleShoot) => singleShoot.id === id));

    const newShoots = shoots.filter(
      (singleShoot) => singleShoot.id !== deleting.id
    );
    setShoots(newShoots);
  };

  setShoots(newShoots);
  setDeleting(null);
};

const deleteDialog = (
  <Dialog open={!!deleting}>
    <DialogContent>
      <h1>Please confirm</h1>
      <p>The following item will be deleted.</p>

      <StyledCard>
        <div>
          <h1>{deleting && deleting.customer}</h1>
          <h2>{deleting && format(deleting.date, "d MMMM yyyy")}</h2>
          <h3>{deleting && deleting.type}</h3>
        </div>
      </StyledCard>

      <ButtonArea>
        <StyledButton
          startIcon={<EditIcon />}
          onClick={() => setDeleting(null)}
          variant="contained"
        >
          Cancel
        </StyledButton>

        <StyledButton
          startIcon={<RemoveIcon />}
          onClick={() => handleDelete(deleting)}
          variant="contained"
        >
          Delete
        </StyledButton>
      </ButtonArea>
    </DialogContent>
  </Dialog>
);

const editingDialog = (
  <Dialog open={!!editing}>
    <DialogContent>
      <h1>Please confirm</h1>

      <StyledCard>
        <div>
          <TextField
            label="customer"
            value={!!editing.customer}
            onChange={(event) => {
              setEditing({ ...editing, customer: event.target.value });
            }}
          />
        </div>
      </StyledCard>

      <ButtonArea>
        <StyledButton
          startIcon={<EditIcon />}
          onClick={() => setEditing(null)}
          variant="contained"
        >
          Cancel
        </StyledButton>

        <StyledButton
          startIcon={<RemoveIcon />}
          onClick={() => handleEdit(editing)}
          variant="contained"
        >
          Save
        </StyledButton>
      </ButtonArea>
    </DialogContent>
  </Dialog>
);

<Page>
  <h1>Schedule</h1>
  {deleteDialog}
  {editingDialog}
  <List>
    {shoots.map(({ id, customer, date, type }) => {
      return (
        <StyledCard>
          <div>
            <h1>{customer}</h1>
            <h2>{format(date, "d MMMM yyyy")}</h2>
            <h3>{type}</h3>

            <ButtonArea>
              <StyledButton
                startIcon={<EditIcon />}
                onClick={() => handleEdit(id)}
                variant="contained"
              >
                EDIT
              </StyledButton>

              <StyledButton
                startIcon={<RemoveIcon />}
                onClick={() => handleDelete(id)}
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
</Page>;

export default Schedule;
