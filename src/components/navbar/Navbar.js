import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='button'>Home</Link>
      <Link to='/about' className='button'>About</Link>
      <Link to='/work' className='button'>Work</Link>

    </div>
  )
};

export default Navbar;
