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

import "./Activities.css"
import React from 'react'

import photo1 from '../Images/Elderly_Bingo.jpg'
import photo2 from '../Images/Elderly_Arts _and_Crafts.jpg'
import photo3 from '../Images/Elderly_Baking_club.jpg'
import photo4 from '../Images/Elderly_Card_making.jpeg'
import photo5 from '../Images/Elderly_Cooking_classes.jpg'
import photo6 from '../Images/Elderly_Dance_classes.jpeg'
import photo7 from '../Images/Elderly_Gardening_club.jpg'
import photo8 from '../Images/Elderly_memory_games.jpg'
import photo9 from '../Images/Elderly_Movie_Night.jpeg'
import photo10 from '../Images/Elderly_music_theapy.jpg'
import photo11 from '../Images/Elderly_Painiting_Club.jpg'
import photo12 from '../Images/Elderly_Quiz_night.jpg'

  export default function Activities() {

return (
  <div className='activitiesPhotos'>
    <img src={photo1} alt = "bingo" />
    <img src={photo2} alt = "Arts&crafts"/> 
    <img src={photo3} alt = "Baking club"/>
    <img src={photo4} alt = "Card making"/>
    <img src={photo5} alt = "Cooking classes"/>
    <img src={photo6} alt = "Gardening club"/>
    <img src={photo7} alt = "Memory games"/>
    <img src={photo8} alt = "Move night"/>
    <img src={photo9} alt = "Music theapy"/>
    <img src={photo10} alt = "Painting club"/>
    <img src={photo11} alt = "Quiz night"/>

    <div>Activities</div>
  </div>
    )
}}