import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';

function Tracker() {


  return (
    <StyledContainer>
      <Value>
        <Box>235.000</Box>
        <Box>Transaction per second</Box>
      </Value>
      <Value>
        <Box>$10m</Box>
        <Box>Avg.cost per transaction</Box>
      </Value>
      <Value>
        <Box>+50.000</Box>
        <Box>Total transactions</Box>
      </Value>
      <Value>
        <Box>3.500</Box>
        <Box>Validtor nodes</Box>
      </Value>
     
    </StyledContainer >
  );
}
const StyledContainer = styled(Box)`
  margin : 0px 140px;
  margin-top : 35px;
  background : #FEFAEB;
  padding : 35px 10px;
  display : flex;
  justify-content : space-between;
`;
const Value = styled(Box)`
  width : 261px;
  text-align : center;
  >div:nth-child(1){
    font-weight : bold;
    color : #FFCC00;
    font-size : 48px;
    line-height : 60px;
  }
  >div:nth-child(2){
    color : #556987;
    font-size : 20px;
    line-height : 30px;
    font-weight : 500;
  }
`;

export default Tracker