import React from 'react'
import "./Header.css"

export default function Header() {
  return (

    <header>
      <img src='' ClassName="logo" alt="logo"/>
      <nav ClassName="Navheader">
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact us</a>
        <button ClassName="login-btn">Login</button>
      </nav>
    </header>
  )
}
