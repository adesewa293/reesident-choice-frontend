import React, {useState, useEffect} from 'react'
import axios from "axios"
import "./Activities.css"


export default function Activities() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    getActivities()
    },[])


  // THIS function is fetching all activites
  async function getActivities() { 
    let API = 'http://localhost:8086/get-week-events'
    const result = await axios.get(API)
    console.log(result)
    setActivities(result.data)
    console.log(activities)
  }  

  return (
    <div>
      <h2>Activities to choose for today</h2>
        <ul>
          {activities.map(activity => {
            return (
              <>
                <div>
                <h2>{activity.description}</h2>
                <p>{activity.summary}</p>
                {/* <p>{activity.start}</p>
                <p>{activity.end}</p> */}
                </div>
                <div>
                  <img src={activity.attachments ? activity.attachments[0].fileUrl : ''} alt={'some text'}/>
                </div>
                <button></button>
              </>
            )})}
        </ul>
    </div>
  )
}

  