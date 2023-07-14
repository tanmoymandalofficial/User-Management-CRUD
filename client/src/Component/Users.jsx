
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../redux/userSlice';

const Users = () => {
    const users = useSelector(state => state.users.users);
    const dispach = useDispatch();

   const handleDelete = (id)=>{
        axios.delete(`https://react-user-curd.onrender.com/delete/${id}`)
        .then(res => {
            dispach(deleteUser({id}));
            console.log(res)
        })
        .catch(err => console.log(err))
   }


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
                                    <Link to={`/edit/${user.id}`} className='btn btn-sm btn-success'>Update</Link>
                                    <span> </span>
                                    <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger'>Delete</button>
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