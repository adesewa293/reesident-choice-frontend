import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import "./Menuupdate.css";
import ImageCarousel from "./ImageCarousel";
import VoteUp from "./VoteUp";
import VoteDown from "./VoteDown";
import LoadingAnimation from "./Loadinganimation";

export default function Menuupdate() {
  const [menuItems, setMenuItems] = useState([]);
  const [menuEdit, setMenuEdit] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getMenu = async () => {
    const response = await axios.get(
      "https://resident-choice-api.onrender.com/menus"
    );
    setMenuItems(response.data);
  };

  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      await getMenu();
      setIsLoading(false);
    };
    loadInitialData();
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

  const handleVote = async (id, action) => {
    try {
      await axios.post(
        `https://resident-choice-api.onrender.com/menus/${id}/${action}`
      );
      getMenu();
    } catch (err) {
      console.error("Error voting:", err);
    }
  };

  return (
    <div>
      <Modal menu={menuEdit} onSave={handleSave} />
      <i>{message}</i>
      <div className="card-container">
        {isLoading ? (
          <LoadingAnimation classNmae="loading" />
        ) : menuItems.length === 0 ? (
          <p>The menu list is empty</p>
        ) : (
          menuItems.map((menu) => (
            <div className="card" key={menu._id}>
              <p>{menu.day}</p>
              <p>Week: {menu.week}</p>
              <p>mealtime: {menu.meal_time}</p>
              <div className="image-slider-container">
                <ImageCarousel>
                  {menu.imageUrl.map((image, i) => (
                    <div key={i}>
                      <img src={image} alt="menuitems" />
                    </div>
                  ))}
                </ImageCarousel>
              </div>
              <p>First Meal Option: {menu.main_1}</p>
              <p>Second Meal Option: {menu.main_2}</p>
              <p>side meal 1: {menu.side_1}</p>
              <p>side meal 2: {menu.side_2}</p>
              <p>Dessert: {menu.desert_1}</p>
              <p>Total Votes: {menu.voteup - menu.votedown}</p>{" "}
              <div className="vote-buttons">
                <VoteUp
                  className="vote-buttons"
                  onVote={() => handleVote(menu._id, "voteup")}
                />
                <VoteDown
                  className="vote-buttons"
                  onVote={() => handleVote(menu._id, "votedown")}
                />
              </div>
              <button className="menuButton" onClick={() => handleEdit(menu)}>
                Edit menu
              </button>
              <button
                className="menuButton"
                onClick={() => handleDelete(menu._id)}
              >
                Delete menu
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
