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
    fullstack,
  }) => {
    return (
      <Div divClass={!fullstack ? "container mt-5" : ""}>
        <Div divClass="row">
          <Div divClass="col-lg-12 col-md-12 col-sm-12">
            {!fullstack ? (
              <SubHeading subheadingClass="fw-bold mb-4">
                Institute Director(s)
              </SubHeading>
            ) : <></>}
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
