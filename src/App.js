import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import AddUser from './Components/AddUser/AddUser';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import EditUser from './Components/EditUser/EditUser';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<PrivateRoute>
        <Home /> 
      </PrivateRoute>
      } />
      
      <Route path='/adminpanel' element={<PrivateRoute><AdminPanel/></PrivateRoute>} />

      <Route path='/adminpanel/adduser' element={<PrivateRoute><AddUser /></PrivateRoute>} />
      <Route
         path="/profile"
          element={<PrivateRoute>
              <Profile/>
          </PrivateRoute>} />
      <Route path='/edituser' element={<PrivateRoute><EditUser/></PrivateRoute>} />
    </Routes>
    </>
  );
}

export default App;
