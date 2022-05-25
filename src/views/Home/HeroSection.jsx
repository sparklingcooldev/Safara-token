import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';

function HeroSection() {


  return (
    <StyledContainer>
      <Light />
      <Section>
        <Box width={'50%'} position={'relative'}>
          <Box width={'56px'} height={'20px'} mt={'72px'} ml={'10px'}>
            <img src={'/images/herosection/goodday.png'} width={'100%'} height={'100%'} />
          </Box>
          <Box display={'flex'} alignItems={'center'} mt={'27px'}>
            <Box width={'25px'} height={'25px'}>
              <img src={'/images/herosection/verify.png'} width={'100%'} height={'100%'} />
            </Box>
            <Box ml={'12px'} color={'#EBBC00'}>
              Blockchain by the People, and for the People
            </Box>
          </Box>
          <Box fontSize={'34px'} fontWeight={500} mt={'38px'}>
            Building Blockchain Infrastructures that empowers it users through privacy and Security.
          </Box>
          <Box color={'rgba(0,0,0,0.7)'} width={'100%'} maxWidth={'390px'} mt={'30px'}>
            Sahara Token (SATO) is the native currency on the Sahara Blockchain Ecosystem.
            Built on-top of the Binance Smart Chain with Zero Transaction Free Principle.
          </Box>
          <Box mt={'34px'} display={'flex'}>
            <BuyButton width={'138px'} height={'66px'} fontSize={'18px'}>
              Buy SATO
            </BuyButton>
            <Box mr={'27px'} />
            < SecondaryButton width={'186px'} height={'66px'}>
              Whitepaper
            </SecondaryButton>
          </Box>
          <Sphere />
          <Box mt={'40px'} display={'flex'} >
            <Box display={'flex'} mr={'10px'}>
              <Box color={'#FFCC00'} fontSize={'14px'}>Follow us</Box>
              <Box width={'16px'} borderTop={'1px solid #FFCC00'} mt={'10px'} ml={'5px'} />
            </Box>
            <Socials mt={'3px'}>
              <Box >
                <img src={'/images/herosection/twitter.png'} width={'100%'} height={'100%'} />
              </Box>
              <Box >
                <img src={'/images/herosection/facebook.png'} width={'100%'} height={'100%'} />
              </Box>
              <Box>
                <img src={'/images/herosection/instagram.png'} width={'100%'} height={'100%'} />
              </Box>
              <Box>
                <img src={'/images/herosection/linkedin.png'} width={'100%'} height={'100%'} />
              </Box>
            </Socials>
          </Box>
        </Box>
        <Box width={'50%'} height={'calc((50vw - 140px) / 644 * 624)'}>
          <img src={'/images/herosection/virtual.png'} width={'100%'} height={'100%'} />
        </Box>
      </Section>
      <Box width={'65px'} height={'76px'} mx={'auto'} mt={'-40px'}>
        <img src={'/images/herosection/scrolldown.png'} width={'100%'} height={'100%'} />
      </Box>
    </StyledContainer >
  );
}

const Socials = styled(Box)`
  
  display  : flex;
  justify-content : space-between;
  width : 90px;
  >div{
    width : 13px;
    height : 13px;
    cursor : pointer;
    transition : all 0.3s;
    :hover{
      width : 15px;
      height : 15px;
    }
  }
`;

const Sphere = styled(Box)`
  position : absolute;
  background-image : url('/images/herosection/sphere.png');
  background-size : 100% 100%;
  width : 17px;
  height: 16px;
  top : 210px;
  right : 0px;
`;

const Section = styled(Box)`
  padding : 0px 140px;
  display : flex;
  justify-content : space-between;

`;

const Light = styled(Box)`
  position : absolute;
  background-image : url('/images/herosection/Light.png');
  background-size : 100% 100%;
  width : 1000px;
  height: 900px;
  top : -150px;
  left : -120px;
`;
const StyledContainer = styled(Box)`
  position : relative;
  background-color : white!important;
  font-size : 16px;
`;


export default HeroSection