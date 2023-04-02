import React from 'react'
import { Div, CommonCard, UnorderedList, ListItem } from 'components'

export const CloudDevopsCareer = React.memo(({
    cardText1,
    cardText2,
    cardText3,
    cardText4,
    
}) => {
    return (
      <Div divClass="container mt-4">
        <Div divClass="row">
            <Div divClass="col-sm-12 col-md-5 col-lg-5">
                <CommonCard cardClass="card">
                    {cardText1}
                </CommonCard>
                <CommonCard cardClass="card">
                    {cardText2}
                </CommonCard>
                <CommonCard cardClass="card">
                    {cardText3}
                </CommonCard>
                <CommonCard cardClass="card">
                    {cardText4}
                </CommonCard>
            </Div>
            <Div divClass="col-sm-12 col-md-7 col-lg-7">
                <UnorderedList>
                    <ListItem></ListItem>
                </UnorderedList>
            </Div>
        </Div>
      </Div>
    )
})