import React from "react";
import { CommonCard, Div, Paragraph, SubHeading, Image, Span } from "components";
import { HOME_PAGE_IMAGES } from "assets/images";

export const YoungTalent = React.memo(() => {
  return (
    <Div divClass="container mb-5 mt-5">
      <Div divClass="row">
        <SubHeading subheadingClass="fw-bold text-primary">
          We are proud to have
        </SubHeading>
        <SubHeading subheadingClass="fw-bold">
          Our Young Talent & Star
        </SubHeading>
      </Div>
      <Div divClass="row mt-5">
        <Div divClass="col-lg-4 col-md-4 col-sm-12 mb-2"></Div>
        <Div divClass="col-lg-4 col-md-4 col-sm-12 mb-2">
          <CommonCard cardClass="card d-flex align-items-center border-0">
            <Image imagePath={HOME_PAGE_IMAGES.nikhilGarg} imageClass="img-thumbnail img-dimensions"/>
          </CommonCard>
          <Paragraph paragraphClass="d-flex justify-content-center flex-column">
            <Span spanClass="pt-2 fw-bold fs-5 align-center">Nikhil Garg</Span>
            <Span spanClass="text-center">Chief Executive Officer</Span>
            <Span spanClass="text-center">ByteCube Techsolutions Pvt. Ltd., Agra</Span>
          </Paragraph>
        </Div>
        <Div divClass="col-lg-4 col-md-4 col-sm-12 mb-2"></Div>
        <Div divClass="col-lg-12 col-md-12 col-sm-12 mb-2">
            <Paragraph paragraphClass="align-justify pt-2 mb-2">
                At Learn2Earn Labs, we are proud to say that we always put our efforts in nurturing young talents and guiding students towards a successful career.
            </Paragraph>
            <Paragraph paragraphClass="align-justify pt-2 mb-2">
                One of our star performer, Nikhil Garg who came to us at the age of 12 with a curiosity and passion for games, websites and hacking. With the guidance of our experts and his determination, Nikhil Garg honed his skills and now earning an impressive average of 3 lacs per month as a professional freelancer in the area of mobile app development and MERN Stack. In Dec, 2023 he registered his own company, ByteCube Techsolutions Private Limited, Agra on the basis of his elder brother and mother.
            </Paragraph>
            <Paragraph paragraphClass="align-justify pt-2 mb-2">
                We are proud to have played a crucial role in his career journey and continuing work with him as he will achieve a greater heights in his professional journey.
            </Paragraph>
            <Paragraph paragraphClass="align-justify pt-2 mb-2">
                If you’re also looking for an institute which provides students with the knowledge, experience, guidance and support needed to succeed in career, then look no further than Learn2Earn Labs.
            </Paragraph>
        </Div>
      </Div>
    </Div>
  );
});
