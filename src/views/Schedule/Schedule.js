import React, { useState } from "react";
import { Button, Card } from "@material-ui/core";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
//import { Table } from "reactstrap";
import faker, { date } from "faker";
import fakerE from "faker-extra";
import { format} from "date-fns";
import 

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
{

const HeadCell= styled.th`
border: 1px solid;
padding: 1rem;
`;

const DataCell = styled.td`
border: 1px solid;
padding: 1rem;
`;

  /* <style>
div {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
</style> */
}
const SHOOT_TYPES = ["Wedding", "Babyshower", "Profile", "Birthday"];

// 
const FAKE_PROPS = {
  shoots: fakerE.array(100, () => ({
    id: faker.datatype.uuid(),
    customer: faker.name.findName(),
    //     phoneNumber: faker.number(),
    // emailAddress: faker.address(),
    // loation: faker.
    date: faker.date.future(),
    type: faker.random.arrayElement(SHOOT_TYPES),
  })),
};

const Schedule = () => {
  const [sorting, setSorting] = useState("date-closest");
const [search,setSe]

  return (
    <div className="body">
      <Page>
        <h2>Schedule</h2>
        <br />
        <StyledCard>
          <StyledButton
            style={{ color: "navy" }}
            variant="contained"
            href="/AddShoot"
          >
            <AddIcon href="/AddShoot" />
          </StyledButton>

          <StyledButton style={{ color: "navy" }} variant="contained">
            <EditIcon />
          </StyledButton>

          <StyledButton style={{ color: "navy" }} variant="contained">
            <RemoveIcon />
          </StyledButton>
        </StyledCard>
      </Page>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>phone number</th>
            <th>email address</th>
            <th>Date</th>
            <th>location</th>
            <th>type</th>
          </tr>
          </thead>

          <tbody>
            {FAKE_PROPS.shoots.map(({ id, type, date, customer }) => {
              return (
                <tr key={id}>
                <DataCell>{customer}</DataCell>
             <DataCell>{format(date.d.MMM()}</DataCell>
             <DataCell>{type}</DataCell>
             {/* <DataCell>4</DataCell>
             <DataCell>5</DataCell>
             <DataCell>6</DataCell> */}
           </tr>
              );
            })}
          </tbody>
      </table>
    </div>
  );
};

export default Schedule;
