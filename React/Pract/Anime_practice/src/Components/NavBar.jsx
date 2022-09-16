import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (


    <ul className='nav-bar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Register">Register</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/Anime">Anime</Link></li>
        <li><Link to="/Monga">Monga</Link></li>
    </ul>
  );
}


export default NavBar;