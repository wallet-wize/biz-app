import React from "react";
import { Button, Card } from "@material-ui/core";
import styled from "styled-components";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

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
//   const [AllShoots, setAllShoots] = useState();

  return (
   
    <Page>
      <h2>Schedule</h2> 
         <a href="/AllShoots">back</a>
      <StyledCard>
        <StyledButton
          variant="contained"
        //   disabled={showing === "AllShoots"}
        //   onClick={() => setAllShoots("AllShoots")}
        >
          <AddIcon />
        </StyledButton>

        <StyledButton
          variant="contained"
        //   disabled={showing === "AllShoots"}
        //   onClick={() => setAllShoots("AllShoots")}
        >
          <EditIcon />
        </StyledButton>

        <StyledButton
          variant="contained"
        //   disabled={showing === "AllShoots"}
        //   onClick={() => setAllShoots("AllShoots")}
        >
          <RemoveIcon />
        </StyledButton>
      </StyledCard>
    </Page>
  );
};

export default Schedule;
