import React, {useState }from 'react'
import Modal from 'react-modal'

export default function Modalactivities({isOpen, onClose, onSubmit}) {
    const[activities, setActivities] = useState({
    activityName:'',
    activityImg_url: '',
    activityDescription:'',
    })
    
    const handleChange = (e) => {
        setActivities({...activities, [e.target.name] : e.target.value})
        console.log(activities)
    }
    const handleSubmit = (e) => { 
        e.preventDefault(); onSubmit(activities); setActivities({
            description: '',
            summary: '',
        });
        onClose();
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Activities Modal"
            >
            <h2>Submit Activity Option</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={activities.description}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                <label>Summary</label>
                <input
                    type="text"
                    name="summary"
                    value={activities.summary}
                    onChange={handleChange}
                    required
                />
                </div>
                <button type="submit">Submit</button>
            </form>
            <button onClick={onClose}>Close</button>
        </Modal>
    )
}
