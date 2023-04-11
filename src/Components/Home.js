import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux'
const Home = () => {
  const data=useSelector(state=>state.reducer1)
  console.log(data)
  
  return (
    <div className='container'>
        <h1 className='text-center m-2'>User Contact List</h1>
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
                  <button className='btn btn-danger'>Delete</button>
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
