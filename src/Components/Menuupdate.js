import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import "./Menuupdate.css";
import ImageCarousel from "./ImageCarousel";

export default function Menuupdate() {
  const [menuItems, setMenuItems] = useState([]);
  const [menuEdit, setMenuEdit] = useState(null);
  const [message, setMessage] = useState("");

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
  function handleSave() {
    getMenu();
  }
  async function handleDelete(id) {
    const response = await axios.delete(
      `https://resident-choice-api.onrender.com/menus/${id}`
    );
    setMessage(response.data.message);
    getMenu();
  }

  return (
    <div className="card-container">
      <i>{message}</i>
      {menuItems.length > 0 ? (
        menuItems.map((menu) => {
          return (
            <div>
              <div className="card" key={menu._id}>
                <p>{menu.day}</p>
                <p>Week: {menu.week}</p>
                <p>mealtime: {menu.meal_time}</p>
                <div className="image-slider-container">
                  <ImageCarousel>
                    {menu.imageUrl.map((image, i) => {
                      return (
                        <div>
                          <img key={i} src={image} alt="menuitems" />
                        </div>
                      );
                    })}
                  </ImageCarousel>
                </div>
                <p>First Meal Option: {menu.main_1}</p>
                <p>Second Meal Option: {menu.main_2}</p>
                <p>side meal 1: {menu.side_1}</p>
                <p>side meal 2: {menu.side_2}</p>
                <p>Dessert: {menu.desert_1}</p>
                <button onClick={() => handleEdit(menu)}>Edit menu</button>
                <button onClick={() => handleDelete(menu._id)}>
                  Delete menu
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>The menulist is empty</p>
      )}
      <Modal menu={menuEdit} onSave={handleSave} />
    </div>
  );
}
