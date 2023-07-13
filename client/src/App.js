import logo from './logo.svg';
import './App.css';
import Users from './Component/Users';
import CreateUser from './Component/CreateUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

{/* <div className="App">
      {/* <h1>This page is active</h1> */}
    //   <Users/>
    // </div> */}
