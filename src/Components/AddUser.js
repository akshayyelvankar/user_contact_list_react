import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[number,setNumber]=useState('');
  
  const users=useSelector(state=>state.reducer1)

  const dispatch=useDispatch();
  const navigate=useNavigate()
  function addUser(e)
  {
     e.preventDefault()
     const data={
         id:users[users.length-1].id+1,
         name,
         email,
         number

     }
     dispatch({type:"ADD",payload:data})
     navigate('/')
  }
  return (
    
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
          <div className='w-50   text-white p-4' style={{backgroundColor:'#3F51B5'}}>
            <h1 className='text-center'>Add User</h1>
            <form>
              <div className='m-2 p-1'>
                <label>User Name :</label>
                <input type='text' placeholder='Enter User Name' className='form-control' onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className='m-2 p-1'>
                <label>User Email:</label>
                <input type='text' placeholder='Enter User Email' className='form-control' onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className='m-2 p-1'>
                <label>User Number:</label>
                <input type='text' placeholder='Enter User Number' className='form-control' onChange={(e)=>setNumber(e.target.value)} />
              </div>
              <button className='btn btn-primary m-2 p-2' onClick={(e)=>addUser(e)}>Submit</button>
            </form>
         </div>
        </div>
    
  )
}

export default AddUser
