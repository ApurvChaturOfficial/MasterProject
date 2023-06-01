import React from 'react'

const Delete = () => {
  return (
    <div class="form-container">
      <h2>Close Account</h2>
      <form action="close_account.php" method="POST">
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Close Account</button>
      </form>
    </div>
  )
}

export default Delete