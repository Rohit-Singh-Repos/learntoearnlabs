import React from "react";
import {
  Div,
  OrderedList,
  ListItem,
  SubHeading,
  Paragraph,
  Span
} from "components";

export const Relationship = React.memo(() => {
  return (
    <Div divClass="container mt-5">
      <Div divClass='row'>
        <Div divClass="col-lg-12 col-md-12 col-sm-12">
            <SubHeading subheadingClass="fw-bold text-primary">Relationship with</SubHeading>
            <SubHeading subheadingClass="fw-bold">Corporates & Industry Professionals</SubHeading>
            <Paragraph>As a training unit, we have an active relationship with corporates and industry professionals because building relationships with corporates and industry professionals can bring numerous benefits.</Paragraph>
            <OrderedList unorderedListClass="mt-4">
                <ListItem listItemClass="mb-3 align-justify"><Span spanClass="text-primary">Industry Relevance:</Span> At Learn2Earn Labs, we are committed to providing you the practical knowledge & working experience by experienced trainers & industry experts, cutting-edge curriculum, so you can improve your knowledge, skills, and experience you need to achieve your personal and professional goals.</ListItem>
                <ListItem listItemClass="mb-3  align-justify"><Span spanClass="text-primary">Networking opportunities:</Span> Joining our training institute means becoming part of a dynamic and vibrant community of learners, where you will get the opportunity to connect with industry experts, network with corporate professionals in your area of interest, and engage yourself in ongoing learning for better future. We believe that education is a lifelong pursuit, and we are dedicated to supporting you every step of the journey.</ListItem>
                <ListItem listItemClass="mb-3  align-justify"><Span spanClass="text-primary">Improved placement opportunities:</Span> If you are looking to learn new skills, tools or technology to advance your career, or explore a new field area to work, then our training institute can arrange the resources, guide you accordingly and to help you succeed. We are offering a wide range of customized training programs and we are committed to meeting your learning needs and providing you a great learning experience.</ListItem>
                <ListItem listItemClass="mb-3  align-justify"><Span spanClass="text-primary">Access to resources and support:</Span> We believe that education should be accessible and affordable for everyone hence we also offers part payment facilities, cashback offers, project stipends, work incentives and other financial assistance to make your education more affordable. Most of our training programs are designed to provide a high return on investment with job guarantee & career assistance and giving you the skills and attitude which you need to succeed in your professional journey.</ListItem>
            </OrderedList>
            <Paragraph paragraphClass="align-justify">Hence, building relationships with corporates and industry professionals can help your training institute stay relevant, expand your network, improve placement opportunities for your students, and provide access to valuable resources and support. 
            </Paragraph>
            <Paragraph paragraphClass="align-justify">We are delighted to say that during our professional journey we have successfully tied ups with 300+ corporate professionals.
            </Paragraph>
        </Div>
      </Div>
    </Div>
  );
});
