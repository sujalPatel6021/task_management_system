import React from 'react';
import './AdminRegister.css';
import { MdEmail } from "react-icons/md";
import { FaLock ,FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HomeNavbar from '../Dashboard/HomeNavbar';


function Signup() {
  return (
    <>
    <HomeNavbar/>
    <div className='wapper'>
        <form action="">
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" placeholder=' Username ' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="text" placeholder=' Email ' required />
                <MdEmail className='icon'/>
            </div>
            
            <div className="input-box">
                <input type="text" placeholder='Password' required />
                <FaLock className='icon' />
            </div>
            
            <Link to='/adminlogin' className='signup'><button type='submit'>Signup</button></Link>
            <div className="register-link">
              <p>Do you have an account? <Link to="/adminlogin">Login</Link></p>
            </div>
        </form>
      <p2>SUJAL PATEL &copy; copyright reserved</p2>
    </div>
    </>
  );
}

export default Signup;
