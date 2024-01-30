import React from 'react';
import './HomeAboutUs.css'
import { Link } from 'react-router-dom';
import HomeNavbar from './Dashboard/HomeNavbar'

export default function AboutUs() {
  return (
    <>
    <HomeNavbar/>
    <div className='div'>
      <h2>About us!</h2>
      <h3>Welcome to <span>Task Management System</span></h3>
      <p><span>Task Management System</span> is a professional <span> Management </span> platform. Here we will provide you all management content, which you requires. We're dedicated to providing you the best of <span> Management System</span> , with a focus on dependability and <span>To manage Task and Project </span>. We're working to turn our passion for <span> Management </span> into a booming <Link to="/" className='link1'> online website </Link>. We hope you enjoy our <span>Management Website </span>as much as we enjoy offering them to you.</p>
      <p>I will keep updating more important components on my Website for you. Please give your support.</p>
      <p className='p1'>Thanks For Visiting Our Site <br /><br /><span className='span1'>Have a nice day!</span></p>
    </div>
    </>
  );
}
