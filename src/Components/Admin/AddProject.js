import React from 'react';
import AdminNavbar from '../Dashboard/AdminNavbar';
import './AddProject.css'


export default function AddProject() {
  return (
    <>
    <AdminNavbar/>
    <div className='container-main'>
        <div className="container-main-body">
            <div className="container-header">
                <p>Add Project</p>
            </div>
            <div className="container-main-body-data">
                <label htmlFor="project-name">Project Name</label>
                <input type="text" name="proeject-name" id="project-name" />
                <label htmlFor="project-description">Project Description</label>
                <textarea name="project-description" id="project-description" cols="30" rows="5"/>
                <label htmlFor="project-requirement">Project Requirement</label>
                <textarea name="project-requirement" id="project-requirement" cols="30" rows="5"/>
                <label htmlFor="project-deadline">Project Deadline</label>
                <input type="date" name="date" id="date" />
            </div>
            <div className="container-footer">
                <button>Add Project</button>
            </div>
        </div>

    </div>
    </>
  );
}
