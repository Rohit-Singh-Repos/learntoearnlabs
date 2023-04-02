import React from 'react'
import { Link } from 'react-router-dom'

export const LinkComponent = React.memo(({pathName,children}) => {
    return (
      <Link to={pathName} className='text-dark text-decoration-none'>{children}</Link>
    )
})
