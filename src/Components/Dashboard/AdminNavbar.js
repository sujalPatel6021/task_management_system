import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

export default function AdminNavbar() {
  return (
    <>
       <nav className='nav'>
            <Link to="/adminhome" className='heading1'>Task Management System</Link>
            <ul className='nav-list'>
                <li><Link to="/adminhome" className='nav-items'>Home</Link></li>
                <li><Link to="/aboutus" className='nav-items'>About Us</Link></li>
                <li><Link to="/registermanager" className='nav-items'>Register Manager</Link></li>
                <li><Link to="/addproject" className='nav-items'>Add Project</Link></li>
                <li><Link to="/allproject" className='nav-items'>All Project</Link></li>
                <li><Link to="/adminhome" className='nav-items'>View Managers</Link></li>
                <li><Link to="/adminhome" className='nav-items'>View Employees</Link></li>
                <li><Link to="/changepassword" className='nav-items'>Change Password</Link></li>
                <li><Link to="/contactus" className='nav-items'>Contact Us</Link></li>
                <li><Link to="/logout" className='nav-items'>Logout</Link></li>
            </ul>
       </nav>
    </>
  );
}
