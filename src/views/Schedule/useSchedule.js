import { useState } from "react";
import faker from "faker";
import fakerE from "faker-extra";

const SHOOT_TYPES = ["Wedding", "Babyshower", "Profile", "Birthday"];

const FAKE_PROPS = {
  shoots: fakerE.array(20, () => ({
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

    /**
     * @title handleEdit
     */
     const handleEdit = (id) => {
       if(!id) return setEditing(null);
        if (!editing) {
          return setEditing(shoots.find((singleShoot) => singleShoot.id === id));
        }
    
        const newShoots = shoots.map((singleShoot) => {
          if (singleShoot.id !== id) return singleShoot;
          return {
            ...singleShoot,
            customer: editing.customer,
          };
        });
    
        setShoots(newShoots);
        setEditing(null);
      };

      /**
       * @title handleDelete
       * @param {string} id 
       * @returns 
       */

      const handleDelete = (id) => {
        if(!id) return setDeleting(null);
        if (!deleting)
          return setDeleting(shoots.find((singleShoot) => singleShoot.id === id));
    
        const newShoots = shoots.filter(
          (singleShoot) => singleShoot.id !== deleting.id
        );
        setShoots(newShoots);
      };

      const state = {
          shoots,
          editing,
          deleting
      }

      const actions = {
          editing: handleDelete,
          deleting: handleDelete
      }
    
      return [state, actions]
  }

  export default useSchedule;
