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
      {menuItems.length > 0 ? menuItems.map((menu) => {
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
          </div>
        );
      }): <p>The menulist is empty</p>} 
    </div>
  );
}
