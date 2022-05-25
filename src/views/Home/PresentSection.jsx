import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';

function PresentSection() {

  return (
    <StyledContainer>
      <Line />
      <Box px={'140px'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <Box maxWidth={'572px'} fontWeight={500} fontSize={'34px'}>
            We Are Present In Some Of The Countries With The <span style={{ color: '#FFCC00' }}>Laegest Communities</span>
          </Box>
          <Box >
            <Box mb={'15px'} maxWidth={'390px'} >
              we are present in more than 15 countries with the largest communityand mast supporters
            </Box>
            < SecondaryButton width={'186px'} height={'66px'} fontSize={'18px'}>
              Learn more
            </SecondaryButton>
          </Box>
        </Box>
        <Map mt={'25px'}>
          <Box width={'1100px'} height={'680px'}>
            <img src={'/images/presentsection/map.png'} width={'100%'} height={'100%'} />
          </Box>
          <MapCard top={'181px'} left={'150px'}>
            <Box width={'47px'} height={'47px'}>
              <img src={'/images/presentsection/mapcard.png'} width={'100%'} height={'100%'} />
            </Box>
            <Box ml={'8px'}>
              <Box fontSize={'20px'} fontWeight={500}>563K</Box>
              <Box fontSize={'10px'}>People here</Box>
            </Box>
          </MapCard>
          <MapCard top={'241px'} left={'750px'}>
            <Box width={'47px'} height={'47px'}>
              <img src={'/images/presentsection/mapcard.png'} width={'100%'} height={'100%'} />
            </Box>
            <Box ml={'8px'}>
              <Box fontSize={'20px'} fontWeight={500}>123K</Box>
              <Box fontSize={'10px'}>People here</Box>
            </Box>
          </MapCard>
        </Map>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={'55px'}>
          <Box width={'140px'} height={'30px'}>
            <img src={'/images/presentsection/coinbase.png'} width={'100%'} height={'100%'} />
          </Box>
          <Box width={'290px'} height={'23px'}>
            <img src={'/images/presentsection/blockchain.png'} width={'100%'} height={'100%'} />
          </Box>
          <Box width={'191px'} height={'38px'}>
            <img src={'/images/presentsection/binance.png'} width={'100%'} height={'100%'} />
          </Box>
          <Box width={'166px'} height={'27px'}>
            <img src={'/images/presentsection/bitmex.png'} width={'100%'} height={'100%'} />
          </Box>
        </Box>
      </Box>
    </StyledContainer >
  );
}

const MapCard = styled(Box)`
  background: #F4CC58;
  border-radius: 18.339px;
  display : flex;
  justify-content : center;
  align-items : center;
  width : 133px;
  height : 58px;
  position : absolute;
`;

const Map = styled(Box)`
  background: #FFFBEC;
  backdrop-filter: blur(22px);
  position : relative;
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;
  width : 100%;
  padding : 44px 58px 51px 90px;
  height : 650px;
`;

const StyledContainer = styled(Box)`
  position : relative;
  font-size : 16px;
  color : black;
  padding-top : 300px;
`;

const Line = styled(Box)`
  background-image : url('/images/lines.png');
  background-size : 100% 100%;
  width : 169px;
  height : 45px;
  position : absolute;
  left : 45%;
  top : 160px;
  filter: blur(4px);
  transform: rotate(-37.25deg);
`;

export default PresentSection