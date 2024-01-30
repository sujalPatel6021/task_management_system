import React from 'react';
import AdminNavbar from '../Dashboard/AdminNavbar';
import './RegisterManager.css'

export default function RegisterManager() {
  return (
    <>
    <AdminNavbar/>
    <div className="container-top">
    <div className='container-box'>
            <div className='card-header'>
                <p1>Register Manager</p1>
            </div>
            <div className='container-body'>
               <div className="container-body-data">
                <div className="container-body-data-innerdata">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" id="firstname" />
                </div>
                <div className="container-body-data-innerdata">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" id="lastname" />
                </div>
               </div>
               <div className="container-body-data">
                <div className="container-body-data-innerdata">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="container-body-data-innerdata">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" />
                </div>
               </div>
               <div className="container-body-data">
                    <div className="container-body-data-innerdata">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender">
                            <option value="" disabled selected>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>
                    <div className="container-body-data-innerdata">
                        <label htmlFor="contactno">Contact No</label>
                        <input type="tel" name="contactno" id="contactno" />
                    </div>
               </div>
               <div className="container-body-data">
                    <div className="container-body-data-innerdata">
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" id="age" />
                    </div>
                    <div className="container-body-data-innerdata">
                        <label htmlFor="street">Street</label>
                        <textarea name="street" id="street" cols="30" rows="5"></textarea>
                    </div>
               </div>
               <div className="container-body-data">
                    <div className="container-body-data-innerdata">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" />
                    </div>
                    <div className="container-body-data-innerdata">
                        <label htmlFor="pincode">Pincode</label>
                        <input type="number" name="pincode" id="pincode" />
                    </div>
               </div>
            </div>
               <div className="footer">
                    <button>Register User</button>
               </div>
            </div>

    </div>
    </>
  );
}
