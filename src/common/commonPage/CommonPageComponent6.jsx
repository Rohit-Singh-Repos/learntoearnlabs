import React from "react";
import {
  Div,
  Paragraph,
  SubHeading,
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
    <Div divClass="container mt-5 pt-3">
      <Div divClass="row">
        <Div divClass="col-sm-12 col-md-12 col-lg-12">
            <SubHeading subheadingClass="fw-bold">{headingText}</SubHeading>
            <Paragraph paragraphClass="align-justify mt-4">{paragraphText1}</Paragraph>
            <Paragraph paragraphClass="align-justify mt-4">{paragraphText2}</Paragraph>
        </Div>
      </Div>  
    </Div>
  );
});
