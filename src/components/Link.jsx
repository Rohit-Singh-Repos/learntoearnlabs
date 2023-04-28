import React from 'react'
import { Link } from 'react-router-dom'

export const LinkComponent = React.memo(({pathName,children,linkClass}) => {
    return (
      <Link to={pathName} className={`${linkClass ? 'text-light' : 'text-dark'} text-decoration-none ${linkClass}`}>{children}</Link>
    )
})
