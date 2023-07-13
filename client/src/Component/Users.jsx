import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { getUser } from '../redux/userSlice';
import { Link } from 'react-router-dom';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(()=>{
        const fetchdata = async ()=>{
            try {
                const responce = await axios.get('http://localhost:3002/');
                dispatch(getUser(responce.data));
            } catch (error) {
                console.log(error);
            }
            
        }
        fetchdata();
    },[])


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to='/create' className='btn btn-success btn-sm'>
                Add +
            </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (<tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <button className='btn btn-sm btn-success'>Update</button>
                                    <span> </span>
                                    <button className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>

            </table>
        </div>
    </div>
  )
}

export default Users