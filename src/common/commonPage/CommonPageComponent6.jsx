import React from "react";
import {
  Div,
  Paragraph,
  Heading,
} from "components";

export const WhoCanJoin = React.memo(({ sectionData }) => {
  const {
    whoCanJoinSection: {
      headingText,
      paragraphText1,
      paragraphText2,
    } = {},
  } = sectionData;
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Div divClass="col-sm-12 col-md-12 col-lg-12">
            <Heading headingClass="fw-bold">{headingText}</Heading>
            <Paragraph paragraphClass="align-justify">{paragraphText1}</Paragraph>
            <Paragraph paragraphClass="align-justify">{paragraphText2}</Paragraph>
        </Div>
      </Div>  
    </Div>
  );
});
