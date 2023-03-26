import React from 'react'

export const Heading = React.memo(({children}) => {
    return (
      <h1>{children}</h1>
    )
})

export const Paragraph = React.memo(({children}) => {
    return (
      <p>{children}</p>
    )
})