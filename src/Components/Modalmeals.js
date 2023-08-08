import React, {useState }from 'react'
import Modal from 'react-modal'

export default function Modalmeals({ isOpen, onClose, onSubmit }) {
    const [meal, setMeal] = useState({
        dishName: '',
        dishImg_url: '',
        dishDescription: '',
    });
    
    const handleChange = (e) => {
        setMeal({ ...meal, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); onSubmit(meal);setMeal({
        dishName: '',
        description: '',
    });
    onClose();
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Menu Update Modal"
            className="menu-update-modal" 
            >
            <h2>Submit Menu Update</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Dish Name</label>
                <input
                    type="text"
                    name="dishName"
                    value={meal.dishName}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label>Description</label>
                <textarea
                    name="description"
                    value={meal.description}
                    onChange={handleChange}
                    required
                />
                </div>
                <button type="submit">Submit</button>
            </form>
            <button onClick={onClose}>Close</button>
            </Modal>
        );
        }
    
    
    
    
    
    
    

