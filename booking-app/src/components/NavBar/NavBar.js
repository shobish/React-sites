import React from 'react';
import './NavBar.css';



function NavBar() {
  return (
    <div className='navBar'>
      <div className="navContainer">
        <span className="logo">lamaBooking</span>

        <div className="navItems">
          <button className="navButton">register</button>
          <button className="navButton">login</button>

        </div>

      </div>
                    
    </div>
  )
}

export default NavBar
