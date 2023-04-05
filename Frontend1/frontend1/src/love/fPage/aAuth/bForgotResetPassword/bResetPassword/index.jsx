import React from 'react'

const ResetPassword = () => {
  return (
    <React.Fragment>
      <div className="title flex flex-col items-center">
        <h4 className='text-5xl font-bold'>Reset</h4>
        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
          Enter new password.
        </span>
      </div>

      <form className='py-20' >
        <div className="textbox flex flex-col items-center gap-6">
          <input className='my_textbox' type="text" placeholder='New Password' />
          <input className='my_textbox' type="text" placeholder='Repeat Password' />
          <button className='my_btn' type='submit'>Reset</button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default ResetPassword