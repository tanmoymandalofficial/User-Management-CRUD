import axios from 'axios';
import React, { useState } from 'react'

const CreateUser = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [number, setNumber] = useState(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('/')
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
                    <input type="number" placeholder='Enter Mobile No.' value={number} className='form-control' onChange={(e)=> setNumber(e.target.value)} />
                </div>
                <button  className='btn btn-success m-2'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser