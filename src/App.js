import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="">
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/edituser/:id" element={<EditUser/>} />
      </Routes>
    </div>
  );
}

export default App;

