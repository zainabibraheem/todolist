import React from 'react'

function Navbar(props) {
  return (
    <nav className= {props.darkMode ? "nav-dark" : "nav-light"}>
      <h2  className='nav-logo' >TickTask </h2>
      <div className='toggler'>
        <p className='toggle-light'>Light</p>
        <div 
          className='toggle-container'
          onClick={props.toggleDarkMode}
        >
          <div className='toggle-circle'></div>
        </div>
        <p className='toggle-dark'>Dark</p>
      </div>
    </nav>
  )
}

export default Navbar
