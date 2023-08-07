import React, { useState } from 'react';
import './Modal.css'; // Import your CSS file for styling

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weeek, setWeek] = useState('');
  const [day, setDay] = useState('');
  const [mealtime, setMealTime] = useState('');
  const [imageUrl, setImgUrl] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Add Menu Items</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <input
              type="text"
              placeholder="week"
              value={weeek}
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
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;