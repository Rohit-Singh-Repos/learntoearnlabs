import React from "react";
import {
  Div,
  CommonCard,
  UnorderedList,
  ListItem,
  SubHeading,
} from "components";

export const CloudDevopsCareer = React.memo(({ sectionData, mobileDetector }) => {
  const {
    cloudDevopsCareerSection: { headingText, cardTextData, listItemData } = {},
  } = sectionData;

  return (
    <Div divClass="container mt-5">
          <Div divClass="row">
            <SubHeading subheadingClass="fw-bold">{headingText}</SubHeading>
            <Div divClass="row col-sm-12 col-md-12 col-lg-12 mt-4">
              {cardTextData && cardTextData.length !== 0 ? (
                cardTextData.map((item) => (
                  <React.Fragment key={item.id}>
                    <Div divClass="col-sm-12 col-md-5 col-lg-5">
                      <CommonCard
                        
                        cardClass={`card mb-4 ${mobileDetector ? `mt-4` : ""} pt-1 pb-1 rounded-0 bg-light text-center fw-bold`}
                      >
                        {item.cardText}
                      </CommonCard>
                    </Div>
                    <Div divClass="col-sm-12 col-md-7 col-lg-7 ">
                      <ListItem listItemClass="align-justify">
                        {item.listText}
                      </ListItem>
                    </Div>
                  </React.Fragment>
                ))
              ) : (
                <></>
              )}
            </Div>
            {/* <Div divClass="col-sm-12 col-md-7 col-lg-7 mt-3">
              <UnorderedList>
                {listItemData && listItemData.length !== 0 ? (
                  listItemData.map((item) => (
                    <ListItem key={item.id} listItemClass="align-justify mb-3">
                      {item.listText}
                    </ListItem>
                  ))
                ) : (
                  <></>
                )}
              </UnorderedList>
            </Div> */}
          </Div>
        </Div>
  );
});
