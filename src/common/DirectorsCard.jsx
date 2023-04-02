import React from "react";
import { CardImage, Div } from "components";
import { SubHeading } from "components";

export const InstituteDirector = React.memo(
  ({
    directorName,
    directorQualification,
    imagePath,
    imageClass,
    imageAltText,
    cardClass,
    children,
  }) => {
    return (
      <Div divClass="container mt-5">
        <Div divClass="row">
          <Div divClass="col-lg-12 col-md-12 col-sm-12">
            <SubHeading subheadingClass="fw-bold">
              Institute Director(s)
            </SubHeading>
            <CardImage
              directorName={directorName}
              directorQualification={directorQualification}
              imagePath={imagePath}
              imageClass={imageClass}
              imageAltText={imageAltText}
              cardClass={cardClass}
            >
              {children}
            </CardImage>
          </Div>
        </Div>
      </Div>
    );
  }
);
