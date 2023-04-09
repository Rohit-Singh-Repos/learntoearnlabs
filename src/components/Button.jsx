import React from 'react'

export const Button = React.memo(({buttonClass,children,buttonHandler,...props}) => {
    return (
      <button className={buttonClass} onClick={buttonHandler} {...props}>{children}</button>
    )
})
