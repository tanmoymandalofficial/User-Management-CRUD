import axios from 'axios';
import React, { useState } from 'react'
import { updateUser, addUser } from '../redux/userSlice'; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    
    const {id} = useParams()
    const users =  useSelector(state => state.users.users)
    const user = users.find(u => u.id === id);
    console.log(user);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [mobile, setMobile] = useState(user.mobile);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3002/update/${id}`, { name, email, mobile})
        .then(res => {
            dispatch(updateUser({id, name, email, mobile}));
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
            <form onSubmit={handleUpdate}>
                <h2>Update User</h2>
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
                <button  className='btn btn-success m-2'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default EditUser