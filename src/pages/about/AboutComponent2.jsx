import React from "react";
import {
  Div,
  Paragraph,
  CommonCard,
  Heading,
} from "components";

export const VissionAndMission = () => {
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Div divClass="col-lg-12 col-md-12 col-sm-12">
          <CommonCard cardClass="card pt-2 pb-2 ps-4 pe-4 rounded-0 bg-primary text-light">
            <Heading headingClass="fw-bold">Vision</Heading>
            <Paragraph paragraphClass="align-justify text-15">
              To be an institute that provides a transformative learning to
              produce highly skilled & competent professionals and to create
              leaders and innovators for society and industry.
            </Paragraph>
            <Heading headingClass="fw-bold">Mission</Heading>
            <Paragraph paragraphClass="align-justify text-15">
              To provide quality education and learning solutions to students
              and working professionals in order to enhance their practical
              knowledge, skills, and working experience.
            </Paragraph>
            <Paragraph paragraphClass="align-justify text-15">
              To provide quality education and learning solutions to students
              and working professionals in order to enhance their practical
              knowledge, skills, and working experience.
            </Paragraph>
            <Paragraph paragraphClass="align-justify text-15">
              To provide an environment for high-quality education and outcome
              based training to students and working professionals, equipping
              them with the practical knowledge, skills, and attitude required
              to succeed in their personal and professional lives.
            </Paragraph>
            <Paragraph paragraphClass="align-justify text-15">
              To deliver practical, hands-on training services that prepares our
              students according to the real-world challenges and opportunities,
              while fostering a culture of learning, execution and continuous
              improvement.
            </Paragraph>
          </CommonCard>
        </Div>
      </Div>
    </Div>
  );
};
