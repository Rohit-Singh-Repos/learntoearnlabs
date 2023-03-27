import React from 'react'

export const Image = React.memo(({imagePath,imageClass,imageAltText}) => {
    return (
      <img src={imagePath} className={imageClass} alt={imageAltText}/>
    )
})