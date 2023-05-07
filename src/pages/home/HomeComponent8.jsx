import React from "react";
import { CommonCard, Div, Image, Paragraph, SubHeading } from "components";
import { HOME_PAGE_IMAGES } from 'assets/images';

export const TrainerProgram = React.memo(() => {
  return (
    <Div divClass="container mb-5 mt-5">
      <Div divClass="row mt-3">
        <Div divClass="col-lg-8 col-md-6 col-sm-12 mb-2">
          <SubHeading subheadingClass="fw-bold text-primary">
            Our unique
          </SubHeading>
          <SubHeading subheadingClass="fw-bold">
            Train The Trainer Program
          </SubHeading>
          <Paragraph paragraphClass="pt-2 mb-2 align-justify">
            Are you looking various ways to engage your students and improve
            their learning experience? Then we are offering training programs to
            teach you how to prepare high-quality e-content, presentations,
            video lectures, conduct online live classes and other digital
            learning materials that will captivate the attention of your
            students and inspire them to learn.
          </Paragraph>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <CommonCard cardClass="card d-flex align-items-center rounded-0">
            <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.trainTheTrainerImage} imageClass="img-fluid" imageAltText=""/>
          </CommonCard>
        </Div>
      </Div>
    </Div>
  );
});
