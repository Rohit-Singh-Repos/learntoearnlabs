import React from "react";
import {
  Div,
  Paragraph,
  Heading,
  CommonCard,
  SubHeading,
  UnorderedList,
  ListItem
} from "components";

export const TrainingMode = React.memo(({ sectionData }) => {
  const {
    trainingModeSection: {
        headingText,
        cardData1 : {headingText1,listTextData,buttonText1} = {},
        cardData2 : {headingText2,addressHeading,addressText,phoneText,buttonText2} = {}
    } = {},
  } = sectionData;
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <Heading headingClass="fw-bold">{headingText}</Heading>
        <Div divClass="col-sm-12 col-md-6 col-lg-6">
            <CommonCard cardClass="card rounded-0">
                <SubHeading>{headingText1}</SubHeading>
                <UnorderedList>
                    {
                        listTextData && listTextData.length !== 0 ? listTextData.map((item) => (
                            <ListItem key={item.id}>{item.listText}</ListItem>
                        )) : <></>
                    }
                </UnorderedList>
            </CommonCard>
        </Div>
        <Div divClass="col-sm-12 col-md-6 col-lg-6"></Div>
      </Div>  
    </Div>
  );
});
