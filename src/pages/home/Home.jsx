import React from 'react'
import { CardComponent } from 'components/Card'

export const HomePage = React.memo(() => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-center p-3'>
        <div className='col-sm-12 col-md-7 col-lg-8'>HomePage</div>
        <div className='col-sm-12 col-md-5 col-lg-4'>HomePage</div>
        <div className="text-bg-primary border-light mt-5 d-lg-flex p-3">
          <CardComponent cardText="300+" cardText2="Corporate Tie-Ups" borderShow={true}/>
          <CardComponent cardText="1200+" cardText2="Alumni" borderShow={true}/>
          <CardComponent cardText="50+" cardText2="Training Programs" borderShow={true}/>
          <CardComponent cardText="3-8 LPA" cardText2="Job Gurantee" borderShow={false}/>
        </div>
      </div>
    </div>
  )
})
