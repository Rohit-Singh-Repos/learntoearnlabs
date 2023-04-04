import React from "react";
import {
  CommonCard,
  Div,
  LinkComponent,
  Paragraph,
  SubHeading,
  Image
} from "components";
import { HOME_PAGE_IMAGES } from 'assets/images';

export const TrainingPrograms = React.memo(() => {
  return (
    <Div divClass="container mb-5 mt-5 pt-4">
      <Div divClass="row">
        <SubHeading subheadingClass="fw-bold text-primary">
          Offering a perfect bunch of
        </SubHeading>
        <SubHeading subheadingClass="fw-bold">
          Top-Edge Training Programs
        </SubHeading>
      </Div>
      <Div divClass="row mt-5 pt-2">
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.javaFullStackImage} imageClass="img-fluid" imageAltText=""/>
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Java FullStack
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.dataScienceAndMachineLearningImage} imageClass="img-fluid" imageAltText=""/>
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Data Science & Machine Learning
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.mernStackDevelopmentImage} imageClass="img-fluid" imageAltText=""/>
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                FullStack Web Development
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.cloudComputingImage} imageClass="img-fluid" imageAltText=""/>
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                
                  Cloud Computing & Devops
     
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.trainTheTrainerImage} imageClass="img-fluid" imageAltText=""/>
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Train The Trainer
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/cloud-computing-and-devops-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.designThinkingImage} imageClass="img-fluid" imageAltText=""/>
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
