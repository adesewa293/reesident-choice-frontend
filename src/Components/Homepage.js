import React from 'react'
import health_care from "../Images/health_care.png"


export default function Homepage() {
  return (
  <main>
    <h1>this is the home page</h1>
    <div className="h_homepage">
      <img className="careimage" src={health_care} alt="Homepage" ></img>
    </div>
    <h3>Who uses Resident Choice?</h3>
    <div className=''>
      <ul>
        <li>
          <p>Residents</p>
        </li>
        <li>
          <p>Manager</p>
        </li>
        <li>
          <p>Staff</p>
        </li>
      </ul>
    </div>
  </main>
  )
}


