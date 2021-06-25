import React, { useEffect, useState } from "react";
import { Button, Card, Select, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import faker from 'faker';
import fakerE from 'faker-extra';
import {format} from 'date-fns';

const SHOOT_TYPES = [
  "Wedding",
  "Babyshower",
  "Profile",
  "Birthday"
];

const FAKE_PROPS = {
  shoots: fakerE.array(5, () => ({
    id: faker.datatype.uuid(),
    customer: faker.name.findName(),
    date: faker.date.future(),
    type: faker.random.arrayElement(SHOOT_TYPES),
  }))
}

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
`;

const StyledButton = styled(Button)`
  && {
    margin: 0 0.5rem;
  }
`;

const HeadCell = styled.th`
  border: 1px solid;
  padding: 1rem;
`

const DataCell = styled.td`
  border: 1px solid;
  padding: 1rem;
`

const HoverCell = styled.tr`
  tr:hover
  display: block;
`

const applySorting = (shoots, sorting) => {
  if (sorting === "date-closest-furthest") {
    return shoots.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
};

const Schedule = () => {
  const [sorting, setSorting] = useState('date-closet-furthest');
  const [search, setSearch] = useState("");

  const [shoots] = useState(FAKE_PROPS.shoots);
  const [displayedShoots, setDisplayedShoots] = useState([]);

  useEffect(() => {
    setDisplayedShoots(applySorting(shoots, sorting))
  }, [sorting]);

  return (
    <div className="body">

<Page>
      <h2>Schedule</h2>
      <br />
      <StyledCard>
        <StyledButton style={{ color: "navy"}} variant="contained" href="/AddShoot" >
          <AddIcon href="/AddShoot" />
        </StyledButton>

        <StyledButton style={{ color: "navy"}} variant="contained">
          <EditIcon />
        </StyledButton>

        <StyledButton style={{ color: "navy"}} variant="contained" href="/Delete">
          <RemoveIcon href="/Delete" />
        </StyledButton>
      </StyledCard>
      <div>
        <Select 
          value={sorting} 
          variant="outlined"
          onChange={(event) => setSorting(event.target.value)}
        >
          <MenuItem value="date-closest-furthest">Date (Closest - Further)</MenuItem>
        </Select>
      </div>
      <table>
        <thead>
          <tr>
            <HeadCell>CUSTOMER</HeadCell>
            <HeadCell>DATE</HeadCell>
            <HeadCell>TYPE</HeadCell>
            <HeadCell>DELETE</HeadCell>
          </tr>
        </thead>
        
        <tbody>
          {FAKE_PROPS.shoots.map(({id, customer, date, type}) => {
            return(
              <tr>
                <DataCell>{customer}</DataCell>
                <DataCell>{format(date, "d MMMM yyyy")}</DataCell>
                <DataCell>{type}</DataCell>
                <DataCell><StyledButton>-</StyledButton></DataCell>
              </tr>
            )
          })}
        </tbody>
      </table>

    </Page>

    </div>
    
  );
};

export default Schedule;
