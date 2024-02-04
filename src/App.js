import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';


function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/home' element={<Home /> } />
    </Routes>
    
    </>
  );
}

export default App;
