import React from 'react'
import { Div, CommonCard, UnorderedList, ListItem, SubHeading } from 'components'

export const CloudDevopsCareer = React.memo(({
  sectionData
}) => {
    const { cloudDevopsCareerSection:{
      headingText,
      cardTextData,
      listItemData,
    } = {} } = sectionData
    console.log("cardTextData",cardTextData)
    return (
      <Div divClass="container mt-4">
        <Div divClass="row">
            <SubHeading subheadingClass="fw-bold">{headingText}</SubHeading>
            <Div divClass="col-sm-12 col-md-5 col-lg-5">
               {
                cardTextData && cardTextData.length !== 0 ? cardTextData.map((item) => (
                  <CommonCard key={item.id} cardClass="card mt-3 rounded-0 bg-light text-center fw-bold">
                    {item.cardText}
                  </CommonCard>
                )) : <></>
               }
            </Div>
            <Div divClass="col-sm-12 col-md-7 col-lg-7">
                <UnorderedList>
                    {
                      listItemData && listItemData.length !== 0 ? listItemData.map((item) => (
                        <ListItem listItemClass="align-justify mt-3">{item.listText}</ListItem>
                      )) : <></>
                    }
                </UnorderedList>
            </Div>
        </Div>
      </Div>
    )
})