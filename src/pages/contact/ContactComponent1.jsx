import React from 'react'
import { CommonCard, Div, Map } from 'components'

export const MapPageAreaComponent = React.memo(() => {
  return (
    <Div divClass="col-sm-12 col-md-6 col-lg-6">
        <CommonCard cardClass="card rounded-0">
            <Map/>
        </CommonCard>
    </Div>
  )
})
