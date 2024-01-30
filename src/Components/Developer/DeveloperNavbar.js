import React from 'react';
import { Link } from 'react-router-dom';
import './DeveloperNavbar.css';

export default function DeveloperNavbar() {
  return (
    <>
       <nav className='nav'>
            <Link to="/developerhome" className='heading1'>Task Management System</Link>
            <ul className='nav-list'>
                <li><Link to="/developerhome" className='nav-items'>Home</Link></li>
                <li><Link to="/developeraboutus" className='nav-items'>About Us</Link></li>
                <li><Link to="/developerhome" className='nav-items'>My Projects</Link></li>
                <li><Link to="/developercontactus" className='nav-items'>Contact Us</Link></li>
                <li><Link to="/logout" className='nav-items'>Logout</Link></li>
            </ul>
       </nav>
    </>
  );
}
