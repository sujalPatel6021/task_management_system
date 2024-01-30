import React from 'react';
import './HomeContactUs.css'
import { Link } from 'react-router-dom';
import AdminNavbar from './Dashboard/AdminNavbar';
const submitButton = () => {
    alert('Your Message sent successfully');
}

export default function ContactUs() {
  return (
    <>
    <AdminNavbar/>
    <div className='container'>
      <h2>Contact Us</h2>
      <form action="#" method='post'>
        <input className='input' type="text" name="name" placeholder='   Name' id="name"required />
        <input className='input' type="email" name="email" id="email" placeholder='   Email' required/>
        <input className='input' type="tel" name="phone" id="phone" placeholder='   Mobile Number' required/>
        <textarea className='input' name="name" rows="4" required placeholder='   Message' id="message" />
        <Link to='/'><button type='submit' className='submit-button' onClick={submitButton}>Submit</button></Link>
      </form>
    </div>
    </>
  );
}
