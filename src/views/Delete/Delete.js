import React, { useState } from "react";
import styled from "styled-components";
import { Button, Card, Dialog} from "@material-ui/core";
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
  margin: 1rem;
`;

const StyledButton = styled(Button)`
  && {
    margin: 0 0.5rem;
  }
`;

const ButtonArea = styled.div`
  padding-top: 16px;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justif-content: center;
`

const Delete = () => {
    const [shoots, setShoots] = useState(FAKE_PROPS.shoots);
    const [deleting, setDeleting] = useState(null);

    const handleDelete = (id) => {
        if(!deleting) return setDeleting(id);

        const newShoots = shoots.filter(singleShoot => singleShoot.id !== id)
        setShoots(newShoots);
        setDeleting(null)
    };

    return (
        <Page>
            <Dialog open={deleting}>Test</Dialog>
            <List>
                {FAKE_PROPS.shoots.map(({id, customer, date, type}) => {
                return(
                        <StyledCard>
                        <div>
                            <h1>{customer}</h1>
                            <h5>{format(date, "d MMMM yyyy")}</h5>
                            <h2>{type}</h2>

                            <ButtonArea>
                                <StyledButton 
                                    startIcon={<EditIcon />}
                                    variant="contained"
                                >
                                    EDIT
                                </StyledButton>
                                <StyledButton
                                    startIcon={<RemoveIcon />} 
                                    variant="contained"
                                    onClick={() => handleDelete(id)}
                                >
                                    DELETE
                                </StyledButton>
                            </ButtonArea>
                        </div>
                    </StyledCard>
                    
                    )
            })}
          </List>
        </Page>
     
    )
}
export default Delete ;