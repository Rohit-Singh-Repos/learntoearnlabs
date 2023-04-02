import React from 'react'

export const OrderedList = React.memo(({children,orderedListClass}) => {
    return (
      <ol className={orderedListClass}>{children}</ol>
    )
})

export const UnorderedList = React.memo(({children,unorderedListClass}) => {
    return (
      <ul className={unorderedListClass}>{children}</ul>
    )
})

export const ListItem = React.memo(({children,listItemClass}) => {
    return(
        <li className={listItemClass}>{children}</li>
    )
})
