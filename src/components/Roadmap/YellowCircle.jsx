import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';

function YellowCircle({ bottom, left, active, top }) {

    return (
        <Top bottom={bottom} left={left} active={active} top = {top}>
            <StyledContainer>
                <Circle />
            </StyledContainer>
        </Top>
    );
}
const Top = styled(Box)`
    filter: ${({ active }) => active ? 'drop-shadow(0px 0px 5px #FFCC00)' : ''};
    position : absolute;    
`;
const Circle = styled(Box)`
  width : 11px;
  height : 11px;
  background-color : #FFCC00;
  border-radius : 50%;
  overflow : hidden;
`;

const StyledContainer = styled(Box)`
    background: rgb(255,246,213);
    width : 22px;
    height : 22px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 50%;
    
`;

export default YellowCircle