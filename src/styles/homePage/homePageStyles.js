import React from 'react'
import styled from 'styled-components';

const LandingPageCard = styled.div`
    width: 1;
    height: 80px; 
    border: 2px solid white;
    @media screen and (max-width: 992px) {
        width: 100%;
        height: 1px; 
        border: 2px solid white;
  }
`
export const LandingPageCardBorder = React.memo(LandingPageCard)