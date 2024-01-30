import React from 'react';
import './Login.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HomeNavbar from '../Dashboard/HomeNavbar';


function Login() {
  return (
    <>
    <HomeNavbar/>
    <div className='wapper'>
        <form action="post">
            <h1>Login</h1>
            
            <div className="input-box">
                <input type="text" placeholder='Your Email Here' required />
                <MdEmail className='icon'/>
            </div>
            
            <div className="input-box">
                <input type="text" placeholder='Password' required />
                <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox"/>Remember me</label>
              <a href="/">Forget Password?</a>
            </div>
            <Link to='/projectadminhome' className='login'><button type='submit'>Login</button></Link>
        </form>
      <p2>SUJAL PATEL &copy; copyright reserved</p2>
    </div>
    </>
  );
}

export default Login;
