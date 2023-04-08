import React from "react";
import {
  CommonCard,
  Div,
  Paragraph,
  SubHeading,
  Image,
  LinkComponent,
} from "components";
import { HOME_PAGE_IMAGES } from "assets/images";

export const ShortTermCourses = React.memo(() => {
  return (
    <Div divClass="container mb-5 mt-5 pt-4">
      <Div divClass="row">
        <SubHeading subheadingClass="fw-bold text-primary">
          Prepare yourself for interviews
        </SubHeading>
        <SubHeading subheadingClass="fw-bold">Short Term Courses</SubHeading>
      </Div>
      <Div divClass="row mt-5 pt-2">
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/programming-fundamentals-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image
                width="200"
                height="200"
                imagePath={HOME_PAGE_IMAGES.candcppImage}
                imageClass="img-fluid"
                imageAltText=""
              />
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Programming Fundamentals
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/java-programming-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image
                width="200"
                height="200"
                imagePath={HOME_PAGE_IMAGES.javaProgrammingImage}
                imageClass="img-fluid"
                imageAltText=""
              />
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Java Programming
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/python-programming-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image
                width="200"
                height="200"
                imagePath={HOME_PAGE_IMAGES.pythonProgrammingImage}
                imageClass="img-fluid"
                imageAltText=""
              />
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Python Programming
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/mysql-database-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image
                width="200"
                height="200"
                imagePath={HOME_PAGE_IMAGES.mySQLImage}
                imageClass="img-fluid"
                imageAltText=""
              />
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                MySQL Database
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/linux-and-aws-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image
                width="200"
                height="200"
                imagePath={HOME_PAGE_IMAGES.linuxAndAWSImage}
                imageClass="img-fluid"
                imageAltText=""
              />
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                Linux & AWS
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
        <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
          <LinkComponent pathName="/html-css-javascript-course">
            <CommonCard cardClass="card d-flex align-items-center rounded-0">
              <Image
                width="200"
                height="200"
                imagePath={HOME_PAGE_IMAGES.htmlAndCssImage}
                imageClass="img-fluid"
                imageAltText=""
              />
              <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">
                HTML/CSS/JavaScript
              </Paragraph>
            </CommonCard>
          </LinkComponent>
        </Div>
      </Div>
    </Div>
  );
});
