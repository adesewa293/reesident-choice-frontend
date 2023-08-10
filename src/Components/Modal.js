import React, { useEffect, useState } from "react";
import "./Modal.css";
import axios from "axios";

function Modal({ menu, onSave }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [week, setWeek] = useState("");
  const [day, setDay] = useState("");
  const [mealtime, setMealTime] = useState("");
  const [mainImageUrl, setMainImgUrl] = useState("");
  const [sideImageUrl, setSideImgUrl] = useState("");
  const [dessertImageUrl, setDessertImgUrl] = useState("");
  const [main_1, setMain1] = useState("");
  const [main_2, setMain2] = useState("");
  const [side_1, setSide1] = useState("");
  const [side_2, setSide2] = useState("");
  const [desert_1, setDesert1] = useState("");
  const [error, setError] = useState("");

  console.log(menu);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (menu) {
      const [imageUrl1 = "", imageUrl2 = "", imageUrl3 = ""] = menu.imageUrl;
      setWeek(menu.week);
      setDay(menu.day);
      setMealTime(menu.mealtime);
      setMainImgUrl(imageUrl1);
      setSideImgUrl(imageUrl2);
      setDessertImgUrl(imageUrl3);
      setMain1(menu.main_1);
      setMain2(menu.main_2);
      setSide1(menu.side_1);
      setSide2(menu.side_2);
      setDesert1(menu.desert_1);
      setIsModalOpen(true);
    }
  }, [menu]);

  function getCombinedImageUrls() {
    return [mainImageUrl, sideImageUrl, dessertImageUrl].filter((url) => !!url);
  }

  async function handleEditMenu() {
    const imageUrl = getCombinedImageUrls();
    await axios.put(
      `https://resident-choice-api.onrender.com/menus/${menu._id}`,
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
    closeModal();
    onSave();
  }

  const handleAddMenu = async () => {
    try {
      const imageUrl = getCombinedImageUrls();
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
      onSave();


    } catch (error) {
      console.log("error", error);
      setError("Error adding new menuItem");
    }
  };
  function handleSave() {
    if (menu) {
      handleEditMenu();
    } else {
      handleAddMenu();
    }
  }

  return (
    <div>
      <button onClick={openModal}>Add Menu Items</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            { menu ? <h2>Edit Menu</h2> : <h2>Add new menu-item</h2>}
            {error && <p>{error}</p>}
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
              placeholder="Main meal imageUrl"
              value={mainImageUrl}
              onChange={(e) => setMainImgUrl(e.target.value)}
            />
            <input
              type="text"
              placeholder="Side meal imageUrl"
              value={sideImageUrl}
              onChange={(e) => setSideImgUrl(e.target.value)}
            />
            <input
              type="text"
              placeholder="Dessert imageUrl"
              value={dessertImageUrl}
              onChange={(e) => setDessertImgUrl(e.target.value)}
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
