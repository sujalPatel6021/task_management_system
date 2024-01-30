import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectAdminNavbar.css';

export default function AdminNavbar() {
  return (
    <>
       <nav className='nav'>
            <Link to="/projectadminhome" className='heading1'>Task Management System</Link>
            <ul className='nav-list'>
                <li><Link to="/projectadminhome" className='nav-items'>Home</Link></li>
                <li><Link to="/projectadminaboutus" className='nav-items'>About Us</Link></li>
                <li><Link to="/projectadminhome" className='nav-items'>My Projects</Link></li>
                <li><Link to="/registeremployee" className='nav-items'>Register Employee</Link></li>
                <li><Link to="/projectadminhome" className='nav-items'>View All Employees</Link></li>
                <li><Link to="/projectadmincontactus" className='nav-items'>Contact Us</Link></li>
                <li><Link to="/logout" className='nav-items'>Logout</Link></li>
            </ul>
       </nav>
    </>
  );
}
