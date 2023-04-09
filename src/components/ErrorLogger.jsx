import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const ErrorFallbackComponent = React.memo(({error}) => {
  return(
    <div>
        <h1>Something Went Wrong</h1>
        <h3>Error Description : {error.message}</h3>
    </div>
  )
})

export const ErrorLogger = React.memo(({children}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        {children}
    </ErrorBoundary>
  )
})