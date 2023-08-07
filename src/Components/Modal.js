import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [week, setWeek] = useState("");
  const [day, setDay] = useState("");
  const [mealtime, setMealTime] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [main_1, setMain1] = useState("");
  const [main_2, setMain2] = useState("");
  const [side_1, setSide1] = useState("");
  const [side_2, setSide2] = useState("");
  const [desert_1, setDesert1] = useState("");
  const [error, setError] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        `https://resident-choice-api.onrender.com/menus`,
        {
          week,
          day,
          mealtime,
          imageUrl,
          main_1,
          main_2,
          side_1,
          side_2,
          desert_1,
        }
      );
      console.log("New menu added:", response.data);

      closeModal();
    } catch (error) {
      console.log("error", error);
      setError("Error adding new menuItem");
    }
  };

  return (
    <div>
      <button onClick={openModal}>Add Menu Items</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {error && <p>{error}</p> }
            <input
              type="text"
              placeholder="week"
              value={week}
              onChange={(e) => setWeek(e.target.value)}
            />
            <input
              type="text"
              placeholder="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
            <input
              type="text"
              placeholder="mealtime"
              value={mealtime}
              onChange={(e) => setMealTime(e.target.value)}
            />
            <input
              type="text"
              placeholder="imageUrl"
              value={imageUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <input
              type="text"
              placeholder="main1"
              value={main_1}
              onChange={(e) => setMain1(e.target.value)}
            />
            <input
              type="text"
              placeholder="main2"
              value={main_2}
              onChange={(e) => setMain2(e.target.value)}
            />
            <input
              type="text"
              placeholder="side1"
              value={side_1}
              onChange={(e) => setSide1(e.target.value)}
            />
            <input
              type="text"
              placeholder="side2"
              value={side_2}
              onChange={(e) => setSide2(e.target.value)}
            />
            <input
              type="text"
              placeholder="desert1"
              value={desert_1}
              onChange={(e) => setDesert1(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
