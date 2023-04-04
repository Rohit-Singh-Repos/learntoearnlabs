import React from "react";

export const Image = React.memo(({ imagePath, imageClass, imageAltText, ...props}) => {
  return <img src={imagePath} className={imageClass} alt={imageAltText} {...props}/>;
});
