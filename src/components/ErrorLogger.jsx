import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Div } from './Div'
import { Heading, Paragraph } from './Text'

const ErrorFallbackComponent = React.memo(({error}) => {
  return(
    <Div>
        <Heading>Something Went Wrong</Heading>
        <Paragraph>Error Description : {error.message}</Paragraph>
    </Div>
  )
})

export const ErrorLogger = React.memo(({children}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        {children}
    </ErrorBoundary>
  )
})