import React from 'react'

export const OrderedList = React.memo(({children,orderedListClass}) => {
    return (
      <ol className={orderedListClass}>{children}</ol>
    )
})

export const UnorderedList = React.memo(({children,unorderedListClass,...props}) => {
    return (
      <ul className={unorderedListClass} {...props}>{children}</ul>
    )
})

export const ListItem = React.memo(({children,listItemClass,...props}) => {
    return(
        <li className={listItemClass} {...props}>{children}</li>
    )
})
