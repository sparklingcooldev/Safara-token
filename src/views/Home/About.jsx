import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';

function About() {


  return (
    <StyledContainer>
      <Line />
      <Light />
      <Box px={'140px'}>
        <Box display={'flex'} justifyContent={'space-between'} pt={'170px'}>
          <Box width={'50%'} mt={'20px'}>
            <Box color={'#EBBC00'}>So About Us?</Box>
            <Box fontSize={'34px'} maxWidth={'450px'} mt={'24px'} fontWeight={500} lineHeight={'41px'}>Proof of People Consensus Principle.</Box>
            <Box color={'rgba(0,0,0,0.7)'} mt={'40px'} maxWidth={'490px'}>
              Building a Decentralized Blockchain Infrastructure,
              backed by the people, built by the people and for you. You own you Data and privacy,
              and must be responsible for it.
            </Box>
            <Box mt={'78px'} display={'flex'} mb={'101px'}>
              <BuyButton width={'275px'} height={'66px'} fontSize={'18px'} >
                What are we Building
              </BuyButton>
              <Box mr={'13px'} />
              < SecondaryButton width={'186px'} height={'66px'}>
                Learn more
              </SecondaryButton>
            </Box>

          </Box>
          <Box width={'50%'}>
            <Box width={'95%'}>
              <img src={'/images/about/back.png'} width={'100%'} height={'100%'} />
            </Box>
          </Box>
        </Box>
        <Contract>
          <Scan />
          <Box ml={'15px'}>
            <Box>Contract address:</Box>
            <Box mt={'10px'} fontSize={'18px'} fontWeight={500}>0xEB484831f5Adde3E41E6bA13B3D7E8a1a83c1B2e</Box>
          </Box>
        </Contract>
      </Box>
    </StyledContainer >
  );
}


const Scan = styled(Box)`
  background-image : url('/images/about/scan.png');
  background-size : 100% 100%;
  height : 59px;
  width : 59px;
`;

const Contract = styled(Box)`
  margin-top : -100px;
  background-image : url('/images/about/contract.png');
  background-size : 100% 100%;
  height : 130px;
  width : 100%;
  padding : 36px 12px;
  display : flex;
  align-items : center;
`;

const StyledContainer = styled(Box)`
  position : relative;
  font-size : 16px;
  color : black;
  overflow : hidden;
`;

const Line = styled(Box)`
  background-image : url('/images/lines.png');
  background-size : 100% 100%;
  width : 169px;
  height : 45px;
  position : absolute;
  left : -25px;
  top : 70px;
`;

const Light = styled(Box)`
  position : absolute;
  background-image : url('/images/about/light.png');
  background-size : 100% 100%;
  width : 1000px;
  height: 900px;
  top : -120px;
  right : -150px;
`;
export default About