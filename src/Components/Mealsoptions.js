import React, { useEffect, useState } from 'react'
import "./Mealoptions.css"

import axios from "axios"


export default function Mealsoptions() {
  const [mealsoptions, setMealsoptions] = useState([])

//run function - getMeals
  useEffect(() => {
    getMealsoptions()
  },[])
  
  //functions gets data from backend 
  async function getMealsoptions() {
    let API = 'http://localhost:8086/get-week-events'
    const result = await axios.get(API)
    console.log(result)
    setMealsoptions(result.data)
    console.log()
    }

  return (
    <main>
      <header>
        <h2> Meal of the day</h2>
      </header>
      <div>
        {mealsoptions.map(activities => {
          return (
            <div>
            <p>{mealsoptions.description}</p>
            <p>{mealsoptions.summary}</p>
            {/* <p>{mealsoptions.start}</p>
            <p>{mealsoptions.end}</p> */}
            </div> 
        )})}
            <img src={mealsoptions.attachments ? mealsoptions.attachments[0].fileUrl : ''} alt={'some text'}></img>
      </div>
  
    </main>
  )
}
