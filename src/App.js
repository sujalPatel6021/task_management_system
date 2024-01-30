import './App.css';
import Home from './Components/LoginForm/Home';
import Login from './Components/LoginForm/Login';
import AdminRegister from './Components/LoginForm/AdminRegister';
import AdminLogin from './Components/LoginForm/AdminLogin';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import AdminHome from './Components/Dashboard/AdminHome';
import Logout from './Components/LoginForm/Logout';
import AboutUs from './Components/AboutUs';
import HomeAboutUs from './Components/HomeAboutUs';
import HomeContactUs from './Components/HomeContactUs';
import ContactUs from './Components/ContactUs';
import RegisterManager from './Components/Admin/RegisterManager';
import AddProject from './Components/Admin/AddProject';
import ChangePassword from './Components/Admin/ChangePassword';
import AllProject from './Components/Admin/AllProject';
import ProjectAdminHome from './Components/ProjectAdmin/ProjectAdminHome';
import RegisterEmployee from './Components/ProjectAdmin/RegisterEmployee';
import ProjectAdminAboutUs from './Components/ProjectAdmin/ProjectAdminAboutUs';
import ProjectAdminContactUs from './Components/ProjectAdmin/ProjectAdminContactUs';
import DeveloperHome from './Components/Developer/DeveloperHome';
import DeveloperAboutUs from './Components/Developer/DeveloperAboutUs';
import DeveloperContactUs from './Components/Developer/DeveloperContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/adminsignup' element={<AdminRegister/>}></Route>
          <Route path='/adminlogin' element={<AdminLogin/>}></Route>
          <Route path='/projectadminhome' element={<ProjectAdminHome/>}></Route>
          <Route path='/adminhome' element={<AdminHome/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/homeaboutus' element={<HomeAboutUs/>}></Route>
          <Route path='/registermanager' element={<RegisterManager/>}></Route>
          <Route path='/addproject' element={<AddProject/>}></Route>
          <Route path='/registeremployee' element={<RegisterEmployee/>}></Route>
          <Route path='/changepassword' element={<ChangePassword/>}></Route>
          <Route path='/allproject' element={<AllProject/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/homecontactus' element={<HomeContactUs/>}></Route>
          <Route path='/projectadminaboutus' element={<ProjectAdminAboutUs/>}></Route>
          <Route path='/projectadmincontactus' element={<ProjectAdminContactUs/>}></Route>
          <Route path='/developercontactus' element={<DeveloperContactUs/>}></Route>
          <Route path='/developeraboutus' element={<DeveloperAboutUs/>}></Route>
          <Route path='/developerhome' element={<DeveloperHome/>}></Route>

      </Routes>
    </BrowserRouter> 
  );
}

export default App;
