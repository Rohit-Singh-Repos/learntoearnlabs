import React from 'react'

export const Div = React.memo(({children,divClass}) => {
    return (
      <div className={divClass}>{children}</div>
    )
})
