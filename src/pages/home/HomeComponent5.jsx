import React from "react";
import {
  CommonCard,
  Div,
  LinkComponent,
  Paragraph,
  SubHeading,
} from "components";

export const TrainingPrograms = React.memo(() => {
  return (
    <Div divClass="container mb-5 mt-5">
      <Div divClass="row">
        <SubHeading subheadingClass="fw-bold text-primary">
          Offering a perfect bunch of
        </SubHeading>
        <SubHeading subheadingClass="fw-bold">
          Top-Edge Training Programs
        </SubHeading>
      </Div>
      <Div divClass="row mt-5">
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Java FullStack
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Data Science & Machine Learning
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                FullStack Web Development
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                <Paragraph paragraphClass="cloud-computing-and-devops-course">
                  Cloud Computing & Devops
                </Paragraph>
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Train The Trainer
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Design Thinking & UI/UX
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
      </Div>
    </Div>
  );
});
