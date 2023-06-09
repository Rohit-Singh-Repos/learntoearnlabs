import React from 'react'

export const Heading = React.memo(({children,headingClass}) => {
    return (
      <h1 className={headingClass}>{children}</h1>
    )
})

export const SubHeading = React.memo(({children,subheadingClass}) => {
  return (
    <h4 className={subheadingClass}>{children}</h4>
  )
})

export const Paragraph = React.memo(({children,paragraphClass,...props}) => {
    return (
      <p className={paragraphClass} {...props}>{children}</p>
    )
})

export const Span = React.memo(({children,spanClass,...props}) => {
    return (
      <span className={spanClass} {...props}>{children}</span>
    )
})