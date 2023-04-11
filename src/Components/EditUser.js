import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

  const EditUser = () => {
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[number,setNumber]=useState()
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id}=useParams()  
  const users=useSelector(state=>state.reducer1)
  const currentuser=users.find((users)=>users.id === parseInt(id))
  
  
  useEffect(()=>{
     if(currentuser)
     {
      setName(currentuser.name)
      setEmail(currentuser.email)
      setNumber(currentuser.number)
     }
  },[currentuser])
  
  function updateuser(e)
  {
     e.preventDefault()
     const data={
         id:parseInt(id),
         name,
         email,
         number
     }
     dispatch({type:"UPDATE",payload:data})
     navigate('/')
  }
  return (
    
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
          <div className='w-50   text-white p-4' style={{backgroundColor:'#81C784'}}>
            <h1 className='text-center'>Edit User</h1>
            <form>
              <div className='m-2 p-1'>
                <label>User Name :</label>
                <input type='text' placeholder='Enter User Name' className='form-control' name="name" value={name} onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className='m-2 p-1'>
                <label>User Email:</label>
                <input type='text' placeholder='Enter User Email' className='form-control' email="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className='m-2 p-1'>
                <label>User Number:</label>
                <input type='text' placeholder='Enter User Number' className='form-control' number="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
              </div>
              <button className='btn btn-primary m-2 p-2'onClick={(e)=>updateuser(e)} >Update</button>
            </form>
         </div>
        </div>
    
  )
}

export default EditUser;
