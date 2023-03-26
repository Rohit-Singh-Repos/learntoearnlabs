import React from 'react'

export const HomePage = React.memo(() => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-center p-3'>
        <div className='col-sm-12 col-md-7 col-lg-8'>HomePage</div>
        <div className='col-sm-12 col-md-5 col-lg-4'>HomePage</div>
        <div class="text-bg-primary border-light mt-5 d-flex p-4">
          <div class="card col-sm-12 col-md-6 col-lg-3 bg-transparent border-0 border-end rounded-0 border-4">
            <div className='card-body'>
              Hello
            </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg-3 bg-transparent border-0 border-end rounded-0 border-4">
            <div className='card-body'>
              Hello
            </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg-3 bg-transparent border-0 border-end rounded-0 border-4">
            <div className='card-body'>
              Hello
            </div>
          </div>
          <div class="card col-sm-12 col-md-6 col-lg-3 bg-transparent border-0">
            <div className='card-body'>
              Hello
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
