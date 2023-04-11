import React from 'react'

const AddUser = () => {
  return (
    
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
          <div className='w-50   text-white p-4' style={{backgroundColor:'#3F51B5'}}>
            <h1 className='text-center'>Add User</h1>
            <form>
              <div className='m-2 p-1'>
                <label>User Name :</label>
                <input type='text' placeholder='Enter User Name' className='form-control' />
              </div>
              <div className='m-2 p-1'>
                <label>User Email:</label>
                <input type='text' placeholder='Enter User Email' className='form-control' />
              </div>
              <div className='m-2 p-1'>
                <label>User Number:</label>
                <input type='text' placeholder='Enter User Number' className='form-control' />
              </div>
              <button className='btn btn-primary m-2 p-2'>Submit</button>
            </form>
         </div>
        </div>
    
  )
}

export default AddUser
