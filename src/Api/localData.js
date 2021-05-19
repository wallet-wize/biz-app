import { v4 as createId } from "uuid";

const getAllShoots = () => {
  const shootsString = window.localStorage.getItem("shoots");
  if (!shootsString) return [];

  return JSON.parse(shootsString);
};

const getSingleShoot = (id) => {
  const shootsString = window.localStorage.getItem("shoots");
  if (!shootsString) return null;

  const shootsData = JSON.parse(shootsString);
  return shootsData.find((savedShoot) => savedShoot.id === id);
};

const addShoot = (props) => {
  const { name, surname, date, location, price, expenses } = props;

  const shootsString = window.localStorage.getItem("shoots");

  if (!shootsString) {
      const newShoots = [
        {
            id: createId(),
          name,
          surname,
          date,
          location,
          price,
          expenses,
        },
      ]
      window.localStorage.setItem("shoots", JSON.stringify(newShoots));
      return newShoots;
  }
  const shootsData = JSON.parse(shootsString);

  const newShoots = [
    {
        id: createId(),
      name,
      surname,
      date,
      location,
      price,
      expenses,
    },
    ...shootsData,
  ]
  window.localStorage.setItem("shoots", JSON.stringify(newShoots));
  return newShoots
};

const updateShoot = (id, property, newValue) => {
    const shootsString = window.localStorage.getItem("shoots");
    if (!shootsString) return false;

    const shootsData = JSON.parse(shootsString);

    const newShoots = shootsData.map((savedShoot) => {
        if (savedShoot.id !== id) return savedShoot;

        return {
            ...savedShoot,
            [property]: newValue,
        }
    })

window.localStorage.setItem("shoots", JSON.stringify(newShoots));
    
    return newShoots;
  
};

const removeShoot = (id) => {
  const shootsString = window.localStorage.getItem("shoots");
  if (!shootsString) return false;

  const shootsData = JSON.parse(shootsString);
  const newShoots = shootsData.filter((savedShoot) => savedShoot.id !== id);

window.localStorage.setItem("shoots", JSON.stringify(newShoots));
  return newShoots;
};

export default {
  getAllShoots,
  getSingleShoot,
  addShoot,
  updateShoot,
  removeShoot,
};
