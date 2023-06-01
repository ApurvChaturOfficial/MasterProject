import React from 'react'

const Loader = () => {
  return (
    <div className='container my_loader'>
      {
        process.env.REACT_APP_ACTIVE_APP === "PersonalPortfolioApp" ? 
        <div class="loadingio-spinner">
          <div class="ldio">
            <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div> </div>
          </div>
        </div> 
        :
        process.env.REACT_APP_ACTIVE_APP === "NehaPortfolioApp" ? 
        <div class="loadingio-spinner">
          <div class="ldio">
            <div><div><div><div></div></div></div><div><div><div></div></div></div></div>
          </div>
        </div>
        :
        process.env.REACT_APP_ACTIVE_APP === "AnushreePortfolioApp" ? 
        <div class="loadingio-spinner">
          <div class="ldio">
            <div></div><div></div><div></div>
          </div>
        </div>
        : 
        "Looooading....."
      }  
    </div>
  )
}

export default Loader