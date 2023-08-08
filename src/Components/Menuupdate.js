import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";

export default function Menuupdate() {
  const [menuItems, setMenuItems] = useState([]);
  const [menuEdit, setMenuEdit] = useState(null);

  const getMenu = async () => {
    const response = await axios.get(
      "https://resident-choice-api.onrender.com/menus"
    );
    setMenuItems(response.data);
  };

  useEffect(() => {
    getMenu();
  }, []);

   function handleEdit(menu) {
    setMenuEdit(menu);
  }

  return (
    <div>
      {menuItems.length > 0 ? (
        menuItems.map((menu) => {
          return (
            <div key={menu._id}>
              <p>{menu.day}</p>
              <p>{menu.week}</p>
              <p>{menu.mealtime}</p>
              {menu.imageUrl.map((image, i) => {
                return <img key={i} src={image} alt="menuitems" />;
              })}
              <p>{menu.main_1}</p>
              <p>{menu.main_2}</p>
              <p>{menu.side_1}</p>
              <p>{menu.side_2}</p>
              <p>{menu.desert_1}</p>
              <button onClick={() => handleEdit(menu)}>Edit menulist</button>
            </div>
          );
        })
      ) : (
        <p>The menulist is empty</p>
      )}
      <Modal menu={menuEdit} />
    </div>
  );
      }
