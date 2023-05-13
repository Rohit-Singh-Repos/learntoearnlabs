import React from 'react'

export const Anchor = React.memo(({children,...props}) => {
    return (
      <a {...props}>{children}</a>
    )
})