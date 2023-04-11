import React from 'react'

const EditUser = () => {
  return (
    
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
          <div className='w-50   text-white p-4' style={{backgroundColor:'#81C784'}}>
            <h1 className='text-center'>Edit User</h1>
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
              <button className='btn btn-primary m-2 p-2'>Update</button>
            </form>
         </div>
        </div>
    
  )
}

export default EditUser
