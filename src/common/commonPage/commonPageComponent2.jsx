import React from "react";
import {
  Div,
  CommonCard,
  UnorderedList,
  ListItem,
  SubHeading,
} from "components";

export const CloudDevopsCareer = React.memo(({ sectionData }) => {
  const {
    cloudDevopsCareerSection: { headingText, cardTextData, listItemData } = {},
  } = sectionData;

  return (
    <Div divClass="container">
          <Div divClass="row">
            <SubHeading subheadingClass="fw-bold">{headingText}</SubHeading>
            <Div divClass="col-sm-12 col-md-5 col-lg-5 mt-4">
              {cardTextData && cardTextData.length !== 0 ? (
                cardTextData.map((item) => (
                  <CommonCard
                    key={item.id}
                    cardClass="card mb-4 pt-1 pb-1 rounded-0 bg-light text-center fw-bold"
                  >
                    {item.cardText}
                  </CommonCard>
                ))
              ) : (
                <></>
              )}
            </Div>
            <Div divClass="col-sm-12 col-md-7 col-lg-7 mt-3">
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
            </Div>
          </Div>
        </Div>
  );
});
