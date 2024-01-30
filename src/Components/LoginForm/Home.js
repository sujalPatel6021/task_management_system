import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import HomeNavbar from '../Dashboard/HomeNavbar';

export default function Home() {
  return (
    <>
    <HomeNavbar/>
    <div className='home'>
      <p>Who are U?</p>
      <div className='button-container'>
        <button><Link to='/Adminlogin' className='link'>Admin</Link></button>
        <button><Link to='/login' className='link'>Project Admin</Link></button>
        <button><Link to='/login' className='link'>Developer</Link></button>
      </div>
    </div>
      <p2 className='p2'>SUJAL PATEL &copy; copyright reserved</p2>
    </>
  );
}
