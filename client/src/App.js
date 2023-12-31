import logo from './logo.svg';
import './App.css';
import Users from './Component/Users';
import CreateUser from './Component/CreateUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/userSlice';
import EditUser from './Component/EditUser';


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchdata = async ()=>{
        try {
            const responce = await axios.get('https://react-user-curd.onrender.com');
            dispatch(getUser(responce.data));
        } catch (error) {
            console.log(error);
        }
        
    }
    fetchdata();
  },[])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/edit/:id' element={<EditUser/>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

{/* <div className="App">
      {/* <h1>This page is active</h1> */}
    //   <Users/>
    // </div> */}
