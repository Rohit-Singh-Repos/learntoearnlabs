import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const ErrorFallbackComponent = ({error}) => {
  console.log("errorData",)
  return(
    <div>
        <h1>Something Went Wrong</h1>
        <h3>Error Description : {error.message}</h3>
    </div>
  )
}

export const ErrorLogger = ({children}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        {children}
    </ErrorBoundary>
  )
}