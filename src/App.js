import React, { useState } from 'react';
import localData from './Api/localData';

function App() {
  const [shoots, setShoots] = useState(localData.getAllShoots())

  const testAdd = () => {
const newShoots = localData.addShoot({
  name: "Nwabisa",
  surname: "Dlokweni",
  date: "16 April 2021",
  location: " Langa",
  price: "R400",
  expenses: "transport = R100"
})

setShoots(newShoots);
  }

  const testUpdate = (id) => {
    const newShoots = localData.updateShoot(id, "name", "Namhla Mthi");
    setShoots(newShoots);
  }

  const testRemove = (id) => {
    const newShoots = localData.removeShoot(id);
setShoots(newShoots);
  }

  return (
    <div> 
      <button onClick={testAdd}> ADD SHOOT</button>
  
<div>
      {shoots.map(({ name, id }) =>(
        <div>
          {name} <button onClick={() => testUpdate(id)}> UPDATE SHOOT</button>
      <button onClick={() => testRemove(id)}> REMOVE SHOOT</button>
</div>
      ))}
    </div>
    </div>
  );
}

export default App;
