import { useState } from "react";
import { v4 as createId } from "uuid";
import faker from "faker";
import fakerE from "faker-extra";
import { seedValue } from "faker/locale/de";

const SHOOT_TYPES = ["Wedding", "Babyshower", "Profile", "Birthday"];

const FAKE_PROPS = {
  shoots: fakerE.array(5, () => ({
    id: faker.datatype.uuid(),
    customer: faker.name.findName(),
    date: faker.date.future(),
    type: faker.random.arrayElement(SHOOT_TYPES),
  })),
};

export const useSchedule = () => {
  const [shoots, setShoots] = useState(FAKE_PROPS.shoots);
  const [deleting, setDeleting] = useState(null);
  const [editing, setEditing] = useState(null);
  const [adding, setAdding] = useState(null);

const [alert, setAlert] = useState();

  const updateValue = (key, value) => {
    if (editing) {
        return setEditing({
        ...editing,
        [key]: value,
      });
    }

    if (adding) {
     return setAdding({
        ...adding,
        [key]: value,
      });
    }
     throw new Error("updateValue was fired at an incorrect time")
  };

  /**
   * @title handleEdit
   */
  const handleEdit = (id) => {
    if (!id) return setEditing(null);

    if (!editing) {
      return setEditing(shoots.find((singleShoot) => singleShoot.id === id));
    }

    const newShoots = shoots.map((singleShoot) => {
      if (singleShoot.id !== id) return singleShoot;
      return {
        ...singleShoot,
        customer: editing.customer,
        date: editing.date,
        type: editing.type,
      };
    });

    setShoots(newShoots);
    setEditing(null);
  };

  /**
   * @title handleDelete
   * @param {string} id
   */
  const handleDelete = (id) => {
    if (!id) return setDeleting(null);

    if (!deleting)
      return setDeleting(shoots.find((singleShoot) => singleShoot.id === id));

    const newShoots = shoots.filter(
      (singleShoot) => singleShoot.id !== deleting.id
    );
    setShoots(newShoots);
    setDeleting(null);
  };

  const handleAdd = (create) => {
    if (create === true) {
      return setAdding({
        id: createId,
        customer: "",
        date: null,
        type: "",
      });
    }

    if (create === false) {
      setAdding(null);
    }

    if(!adding.customer || adding.customer === ""){
        return setAlert("Please add customer name")
    }

    if(!adding.date){
        return setAlert("Please add shoot date")
    }

    if(!adding.type || adding.type === ""){
        return setAlert("Please add type of shoot")
    }


    const newShoots = [adding, ...shoots];
    setShoots(newShoots);
    setAdding(null);
  };

  const state = {
    shoots,
    adding,
    editing,
    deleting,
    alert,
  };

  const actions = {
    delete: handleDelete,
    edit: handleEdit,
    update: updateValue,
    add: handleAdd,
  };

  return [state, actions];
};

export default useSchedule;
