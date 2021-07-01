// import React from "react";
// import { Button, Card } from "@material-ui/core";
// import styled from "styled-components";
// import EditIcon from "@material-ui/icons/Edit";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

// const props = {
//   shoots: [
//     { id: "67", customer: "kj", date: new Date('10 January 2022'), type: "wedding" },
//     { id: "89", customer: "oj", date: new Date('11 January 2022'), type: "profile" },
//     { id: "90", customer: "tj", date: new Date('12 January 2022'), type: "brand" },
//     { id: "ok", customer: "oo", date: new Date('13 January 2022'), type: "party" },
//   ]
// };

// const Page = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   padding: 1rem;
// `;

// const StyledCard = styled(Card)`
//   padding: 1rem;
// `;

// const StyledButton = styled(Button)`
//   && {
//     margin: 0 0.5rem;
//   }
// `;

// const Schedule = () => {
//   return (
//     <div className="body">
//       <Page>
//         <h2>Schedule</h2>
//         <br />
//         <StyledCard>
//           <StyledButton
//             style={{ color: "navy" }}
//             variant="contained"
//             href="/AddShoot"
//           >
//             <AddIcon href="/AddShoot" />
//           </StyledButton>

//           <StyledButton style={{ color: "navy" }} variant="contained">
//             <EditIcon />
//           </StyledButton>

//           <StyledButton style={{ color: "navy" }} variant="contained">
//             <RemoveIcon />
//           </StyledButton>
//         </StyledCard>
//         {props.shoots.map((singleShoot) =>{
//           return(
//             <div>{singleShoot.customer}</div>

//           )
//         }
//         )}
//       </Page>
//     </div>
//   );
// };

// export default Schedule;

// import React, { useEffect, useState } from "react";
// import faker from "faker";
// import fakerE from "faker-extra";
// import styled from "styled-components";
// import { format } from "date-fns";
// import { Select, MenuItem, TextField } from "@material-ui/core";

// const SHOOT_TYPES = ["Wedding", "Babyshower", "Profile", "Birthday"];

// /**
//  * @type {{shoots: {id: string, cusromer:
//  * string. date: Date, type: string}[]}}
//  *  FAKE_PROPS
//  */

// const FAKE_PROPS = {
//   shoots: fakerE.array(100, () => ({
//     id: faker.datatype.uuid(),
//     customer: faker.name.findName(),
//     date: faker.date.future(),
//     type: faker.random.arrayElement(SHOOT_TYPES),
//   })),
// };

// const HeadCell = styled.th`
//   border: 1px solid;
//   padding: 1rem;
// `;

// const DataCell = styled.td`
//   border: 1px solid;
//   padding: 1rem;
// `;

// const Controls = styled.div`
//   padding: 1rem;
// `;

// const applySorting = (shoots, sorting, search) => {
//   const filteredShoots = 
//   search.length < 3
//   ? shoots: 
//   shoots.filter(
//     ({ customer, type }) =>
//       new RegExp(search,'i').test(customer) ||  
//       new RegExp(search,'i').test(type)
//   );

//   if (sorting === "date-closest-furthest") {
//     return filteredShoots.sort((a, b) => a.date.getTime() - b.date.getTime());
//   }

//   if (sorting === "date-furthest-closest") {
//     return filteredShoots.sort((a, b) => b.date.getTime() - a.date.getTime());
//   }

//   if (sorting === "customer-a-z") {
//     return filteredShoots.sort((a, b) => a.customer.localeCompare(b.customer));
//   }

//   if (sorting === "customer-z-a") {
//     return filteredShoots.sort((a, b) => b.customer.localeCompare(a.customer));
//   }

//   if (sorting === "type-a-z") {
//     return filteredShoots.sort((a, b) => a.type.localeCompare(b.type));
//   }

//   if (sorting === "type-z-a") {
//     return filteredShoots.sort((a, b) => b.type.localeCompare(a.type));
//   }

//   throw new Error("Invalid sorting supplied")
// };

// export const Schedule = () => {
//   const [sorting, setSorting] = useState("date-closest-furthesta");
//   const [search, setSearch] = useState("");

//   const [shoots] = useState(FAKE_PROPS.shoots);
//   const [displayedShoots, setDisplayedShoots] = useState(
//     applySorting(shoots, sorting, search)
//   );

//   useEffect(() => {
//     setDisplayedShoots(applySorting(shoots, sorting, search));
//   }, [sorting, search]);

//   return (
//     <div>
//       <div>
//         <Controls>
//           <TextField
//             variant="outlined"
//             label="search"
//             value={search}
//             onChange={(event) => setSearch(event.target.value)}
//           />

//           <Select
//             value={sorting}
//             varient="outlined"
//             onChange={(event) => {
//               if (!event.target.value || typeof event.target.value !== "string")
//                 throw new Error("No value on selection");
//               setSorting(event.target.value);
//             }}
//           >
//             <MenuItem value="date-closest-furthest">
              /* Date (closest - Furthest)
            </MenuItem>
            <MenuItem value="date-furthest-closest">
              Date (Furthest - closest)
            </MenuItem>

            <MenuItem value="customer-a-z">Customer (A - Z)</MenuItem>
            <MenuItem value="customer-z-a">Customer (Z - A )</MenuItem>

            <MenuItem value="type-a-z">Type (A - Z)</MenuItem>
            <MenuItem value="type-z-a">Type (Z - A )</MenuItem>
          </Select>
        </Controls>
      </div>

      <table>
        <thead>
          <tr>
            <HeadCell>Customer</HeadCell>
            <HeadCell>Date</HeadCell>
            <HeadCell>Type</HeadCell>
          </tr>
        </thead>

        <tbody>
          {displayedShoots.shoots.map(({ id, type, date, customer }) => {
            return (
              <tr key={id}>
                <DataCell>{customer}</DataCell>
                <DataCell>{format(date, "d MMMM yyyy")}</DataCell>
                <DataCell>{type}</DataCell>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}; */

export const Schedule = () => {
  return (
  <table>
    <thead>
      <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
      </tr>

    </thead>

    <tbody>
      <tr>
      <td>a</td>
      <td>s</td>
      <td>c</td>
      </tr>

    </tbody>
  </table>)
  ;
};

export default Schedule;
