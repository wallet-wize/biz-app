import React, { Fragment } from "react";
import { Button, Card } from "@material-ui/core";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Table } from "reactstrap";


const props = {
  shoots: [
    { id: "67", customer: "Zan", date: new Date('10 January 2022'), type: "Baby Shower" },
    { id: "89", customer: "John", date: new Date('10 January 2022'), type: "Birthday party" },
    { id: "90", customer: "Nwabs", date: new Date('10 January 2022'), type: "Wedding" },
    { id: "68", customer: "Thato", date: new Date('10 January 2022'), type: "Profile" },
  ]
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

const Schedule = () => {
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

        <StyledButton style={{ color: "navy"}} variant="contained">
          <RemoveIcon />
        </StyledButton>
      </StyledCard>
      <Fragment>
        <Table>
          <caption>ALL SHOOTS</caption>
          <thead>
            <tr>
              <th>CUSTOMER</th>
              <th>DATE</th>
              <th>TYPE</th>
            </tr>
          </thead>
          <tbody>
            {props.shoots.map(singleShoot => (
              <tr key={singleShoot.id}>
                <td>{singleShoot.customer}</td>
                <td>{singleShoot.date}</td>
                <td>{singleShoot.type}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Fragment>
    </Page>

    </div>
    
  );
};

export default Schedule;
