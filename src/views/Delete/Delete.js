import React from "react";
import styled from "styled-components";
import { Button, Card, Select, MenuItem } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import faker from 'faker';
import fakerE from 'faker-extra';
import {format} from 'date-fns';
import { Grid } from "@material-ui/core";

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

const Delete = () => {
    return (
        <Page>
            {FAKE_PROPS.shoots.map(({id, customer, date, type}) => {
            return(
                    <StyledCard>
                    <div>
                        <h1>{customer}</h1>
                        <h5>{format(date, "d MMMM yyyy")}</h5>
                        <h2>{type}</h2>
                    </div>
                </StyledCard>
                
                )
          })}
        </Page>
     
    )
}
export default Delete ;