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

export const Paragraph = React.memo(({children,paragraphClass}) => {
    return (
      <p className={paragraphClass}>{children}</p>
    )
})

export const Span = React.memo(({children,spanClass}) => {
    return (
      <span className={spanClass}>{children}</span>
    )
})