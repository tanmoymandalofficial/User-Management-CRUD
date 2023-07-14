import axios from 'axios';
import React, { useState } from 'react'
import { addUser } from '../redux/userSlice'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [mobile, setMobile] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('https://react-user-curd.onrender.com/create', {name, email, mobile})
        .then(res => {
            dispatch(addUser(res.data));
            console.log(res);
            navigate('/')
        })
        .catch(err => {
            // navigate('/')
            console.log(err)
        })
    }




  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add User</h2>
                <div className='m-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' value={name} className='form-control' onChange={(e)=> setName(e.target.value)} />
                </div>
                <div className='m-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' value={email} className='form-control' onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className='m-2'>
                    <label htmlFor="">Number</label>
                    <input type="number" placeholder='Enter Mobile No.' value={mobile} className='form-control' onChange={(e)=> setMobile(e.target.value)} />
                </div>
                <button  className='btn btn-success m-2'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser