import React from "react";
import {
  Div,
  SubHeading,
  CommonCard,
  LinkComponent,
  Image,
  Paragraph,
} from "components";

export const JobOrientedPrograms = React.memo(({ sectionData }) => {
  const { cardData, headingText } = sectionData;
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <SubHeading subheadingClass="fw-bold">{headingText}</SubHeading>
        {cardData && cardData.length !== 0 ? (
          cardData.map((item) => (
            <Div key={item.id} divClass="col-sm-12 col-md-6 col-lg-4 mt-4 ">
              <LinkComponent pathName={item.pathName}>
                <CommonCard cardClass="card rounded-0" verticalAlign={true}>
                  <Image
                    imagePath={item.imagePath}
                    imageClass="img-fluid"
                    width={150}
                    height={100}
                    imageAltText=""
                  /> <br />
                  <Paragraph paragraphClass="text-center">
                    {item.courseNameText} <br />
                    {item.courseDurationText}
                  </Paragraph>
                </CommonCard>
              </LinkComponent>
            </Div>
          ))
        ) : (
          <></>
        )}
      </Div>
    </Div>
  );
});
