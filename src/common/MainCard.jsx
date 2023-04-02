import { Div, LandingPageCard } from "components";
import React from "react";

export const MainCard = React.memo(({cardData}) => {
  return (
    <Div divClass="text-bg-primary border-light mt-5 d-lg-flex">
        {
            cardData && cardData.length !== 0 ? cardData.map((item) => (
                <LandingPageCard
                    key={item.id}
                    heading={item.heading}
                    subHeading={item.subHeading}
                    borderShow={item.borderShow}
                />
            )) : <></>
        }
    </Div>
  );
});
