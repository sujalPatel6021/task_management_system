import React from 'react';
import AdminNavbar from '../Dashboard/AdminNavbar';
import './AddProject.css'


export default function ChangePassword() {
  return (
    <>
    <AdminNavbar/>
    <div className='container-main'>
        <div className="container-main-body">
            <div className="container-header">
                <p>Change Password</p>
            </div>
            <div className="container-main-body-data">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="oldpassword">Old Password</label>
                <input type="text" name="oldpassword" id="oldpassword" />
                <label htmlFor="newpassword">New Password</label>
                <input type="password" name="newpassword" id="newpassword" />
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="password" name="confirmpassword" id="confirmpassword" />
            </div>
            <div className="container-footer">
                <button>Change Password</button>
            </div>
        </div>

    </div>
    </>
  );
}
