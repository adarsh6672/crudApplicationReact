import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import AddUser from './Components/AddUser/AddUser';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Home /> } />
      <Route path='/profile' element={<Profile />} />
      <Route path='/adminpanel' element={<AdminPanel/>} />
      <Route path='/adminpanel/adduser' element={<AddUser />} />
    </Routes>
    </>
  );
}

export default App;
