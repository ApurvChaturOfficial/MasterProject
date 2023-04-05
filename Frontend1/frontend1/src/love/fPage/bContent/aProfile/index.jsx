import React from 'react'
import Avatar from '../../../hAsset/profile.png'

const ProfileUpdate = () => {
  return (
    <React.Fragment>
      <div className="title flex flex-col items-center">
        <h4 className='text-5xl font-bold'>Profile</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            You can update the details.
          </span>
        </div>

        <form className='py-1' onSubmit={"sad"}>
          <div className='profile flex justify-center py-4'>
            <label htmlFor="profile">
              <img src={Avatar} className='profile_img' alt="avatar" />
            </label>
            
            <input onChange={"onUpload"} type="file" id='profile' name='profile' />
          </div>

          <div className="textbox flex flex-col items-center gap-6">
            <div className="name flex w-3/4 gap-10">
              <input className='my_textbox' type="text" placeholder='FirstName' />
              <input className='my_textbox' type="text" placeholder='LastName' />
            </div>

            <div className="name flex w-3/4 gap-10">
              <input className='my_textbox' type="text" placeholder='Mobile No.' />
              <input className='my_textbox' type="text" placeholder='Email*' />
            </div>

            
            <input className='my_textbox' type="text" placeholder='Address' />
            <button className='my_btn' type='submit'>Update</button>
            </div>

          <div className="text-center py-4">
            <span className='text-gray-500'>come back later? <button onClick={"userLogout"} className='text-red-500' to="/">Logout</button></span>
          </div>
        </form>
    </React.Fragment>
  )
}

export default ProfileUpdate