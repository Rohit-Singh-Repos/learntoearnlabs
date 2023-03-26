import React from 'react'

export const Button = React.memo(({buttonClass,children}) => {
    return (
      <button className={buttonClass}>{children}</button>
    )
})
