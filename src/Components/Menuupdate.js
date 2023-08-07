import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Menuupdate() {
  const [menuItems, setMenuItems] = useState([]);

  const getMenu = async () => {
    const response = await axios.get(
      "https://resident-choice-api.onrender.com/menus"
    );
    setMenuItems(response.data);
  };

  useEffect(() => {
    getMenu();
  }, []);
  // console.log(menuItems);

  return (
    <div>
      {menuItems.map((menu) => {
        return (
          <div key={menu._id}>
            <p>{menu.day}</p>
            <p>{menu.week}</p>
            <p>{menu.mealtime}</p>
            {menu.imageUrl.map((image, i) => {
              return <img key={i} src={image} alt="menuitems" />;
            })}
          </div>
        );
      })}
    </div>
  );
}
