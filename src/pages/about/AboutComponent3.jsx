import React from "react";
import {
  Div,
  UnorderedList,
  ListItem,
  SubHeading,
  Paragraph
} from "components";

export const NeedToJoin = React.memo(() => {
  return (
    <Div divClass="container mt-5">
      <Div divClass='row'>
        <Div divClass="col-lg-12 col-md-12 col-sm-12">
            <SubHeading subheadingClass="fw-bold text-primary">All you need to join</SubHeading>
            <SubHeading subheadingClass="fw-bold">Learn2Earn Labs</SubHeading>
            <UnorderedList unorderedListClass="mt-4">
                <ListItem listItemClass="mb-3 align-justify">At Learn2Earn Labs, we are committed to providing you the practical knowledge & working experience by experienced trainers & industry experts, cutting-edge curriculum, so you can improve your knowledge, skills, and experience you need to achieve your personal and professional goals.</ListItem>
                <ListItem listItemClass="mb-3  align-justify">Joining our training institute means becoming part of a dynamic and vibrant community of learners, where you will get the opportunity to connect with industry experts, network with corporate professionals in your area of interest, and engage yourself in ongoing learning for better future. We believe that education is a lifelong pursuit, and we are dedicated to supporting you every step of the journey.</ListItem>
                <ListItem listItemClass="mb-3  align-justify">If you are looking to learn new skills, tools or technology to advance your career, or explore a new field area to work, then our training institute can arrange the resources, guide you accordingly and to help you succeed. We are offering a wide range of customized training programs and we are committed to meeting your learning needs and providing you a great learning experience.</ListItem>
                <ListItem listItemClass="mb-3  align-justify">We believe that education should be accessible and affordable for everyone hence we also offers part payment facilities, cashback offers, project stipends, work incentives and other financial assistance to make your education more affordable. Most of our training programs are designed to provide a high return on investment with job guarantee & career assistance and giving you the skills and attitude which you need to succeed in your professional journey.</ListItem>
                <ListItem listItemClass="mb-3  align-justify">We are proud of our training services and reputation and we invite you to join our community of highly skilled professionals and industry experts. Our training programs are designed according to the challenges and opportunities of the 21st century, and our experts are dedicated to help you to achieve your goal. </ListItem>
            </UnorderedList>
            <Paragraph paragraphClass="text-center fw-bold text-primary">Don't wait – start your journey to success today by joining our training institute!</Paragraph>
        </Div>
      </Div>
    </Div>
  );
});
