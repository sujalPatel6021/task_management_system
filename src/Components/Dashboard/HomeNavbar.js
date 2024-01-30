import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNavbar.css';

export default function AdminNavbar() {
  return (
    <>
       <nav className='nav'>
            <Link to="/" className='heading1'>Task Management System</Link>
            <ul className='nav-list'>
                <li><Link to="/" className='nav-items'>Home</Link></li>
                <li><Link to="/homeaboutus" className='nav-items'>About Us</Link></li>
                <li><Link to="/homecontactus" className='nav-items'>Contact Us</Link></li>
            </ul>
       </nav>
    </>
  );
}
