import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
const Home = () => {
  const data=useSelector(state=>state.reducer1)
  const dispatch=useDispatch()
  console.log(data)
  
  function deleteUser(id)
  {
    dispatch({type:"DELETE" ,payload:id})
  }
  return (
    <div className='container'>
        <h1 className='text-center m-2'>User Contact List</h1>
        <Link className='btn btn-primary' to={'/adduser'}>Create +</Link>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user,i)=>(
                <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>
                  <button className='btn btn-success mx-2'>Edit</button>
                  <button className='btn btn-danger'onClick={()=>deleteUser(user.id)}>Delete</button>
                  </td>
              </tr>
              ))
            }
           
          </tbody>
        </table>
   </div>
  )
}

export default Home;
