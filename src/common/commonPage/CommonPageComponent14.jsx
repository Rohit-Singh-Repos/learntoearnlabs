import React from "react";
import { Div, CommonCard, SubHeading, Button, Image, Span } from "components";

export const AvailablePrograms = React.memo(({ sectionData }) => {
  return (
    <Div divClass="container mt-5">
      <SubHeading subheadingClass="fw-bold">Available Programs</SubHeading>
      <Div divClass="row">
        {sectionData && sectionData.length !== 0 ? (
          sectionData.map((item) => (
            <Div key={item.id} divClass="col-sm-12 col-lg-4 col-md-6 mt-4">
              <CommonCard cardClass="card rounded-0" verticalAlign={true}>
                <Image
                  width="200"
                  height="200"
                  imagePath={item.imagePath}
                  imageClass="img-fluid mb-3"
                  imageAltText=""
                />
                <Span paragraphClass="text-dark text-center pt-2 mb-2">
                  {item.text1}
                </Span>
                <Span paragraphClass="text-dark text-center pt-2 mb-2">
                  {item.text2}
                </Span>
                <Span paragraphClass="text-dark text-center pt-2 mb-2">
                  {item.text3}
                </Span>
                <Button buttonClass="btn btn-primary rounded-0 mt-3">
                    {item.buttonText}
                </Button>
              </CommonCard>
            </Div>
          ))
        ) : (
          <></>
        )}
      </Div>
    </Div>
  );
});
