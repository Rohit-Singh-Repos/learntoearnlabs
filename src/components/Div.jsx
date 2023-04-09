import React from 'react'

export const Div = React.memo(({children,divClass,...props}) => {
    return (
      <div className={divClass} {...props}>{children}</div>
    )
})
