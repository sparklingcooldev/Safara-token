import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';

function Presale() {

  return (
    <StyledContainer>
      <Line style={{ transform: 'rotate(-37deg)' }} top={'170px'} left={'850px'} />
      <Line top={'250px'} left={'-10px'} />
      <Line top={'250px'} right={'0px'} />
      <Panel>
        <RedCircle />
        <Box borderRadius={'50%'} bgcolor={'red'} width={'8px'} height={'8px'} mt={'45px'} ml={'56%'}/>
        <Box textAlign={'center'} color={'#EBBC00'} >
          Sato Presale is <span style={{ color: 'red' }}>live</span>?
        </Box>
        <Box fontSize={'20px'} textAlign={'center'} mt={'47px'}>
          Price of 0.001 USD per 1 SATO. 0 of 3 phases completed
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={'40px'}>
          <Box width={'107px'} height={'107px'} mr={'35px'}>
            <img src={'/images/presale/plane.png'} width={'100%'} height={'100%'} />
          </Box>
          <Slider>
            <Box>
              <Box />
            </Box>
          </Slider>
          <Box width={'75px'} height={'85px'} ml={'35px'}>
            <img src={'/images/presale/freezer.png'} width={'100%'} height={'100%'} />
          </Box>
        </Box>
        <Box mt={'18px'}>
          <Box textAlign={'center'} fontSize={'24px'} fontWeight={500}>
            <span style={{ color: '#FFCC00' }}>0.000</span> USD raised
          </Box>
          <Box textAlign={'center'} maxWidth={'572px'} mx={'auto'} mt={'12px'} fontSize={'20px'}>
            Price per SATO in Phase 2 will be 0.003 USD The Pancakeswap listing would be on September 20,
            2022 with 6x this current offer at
          </Box>
        </Box>
        <Contract mt={'45px '} mb={'34px'}>
          <Scan />
          <Box mt={'15px'}>Contract address:</Box>
          <Box mt={'6px'} fontSize={'18px'} fontWeight={500}>0xEB484831f5Adde3E41E6bA13B3D7E8a1a83c1B2e</Box>
        </Contract>
        <Box width={'fit-content'} mx={'auto'} mb={'-33px'}>
          <BuyButton width={'275px'} height={'66px'} fontSize={'18px'} >
            Buy SATO Token
          </BuyButton>
        </Box>
      </Panel>
    </StyledContainer >
  );
}

const Scan = styled(Box)`
  background-image : url('/images/about/scan.png');
  background-size : 100% 100%;
  height : 58px;
  width : 58px;
`;


const Contract = styled(Box)`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid #FFCC00;
  box-sizing: border-box;
  backdrop-filter: blur(113px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 36px;
  max-width : 500px;
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  align-items : center;
  padding : 22px;
`;

const Slider = styled(Box)`
    background: #F0F0F3;
    box-shadow: -8.08365px -8.08365px 24.251px #FFFFFF, 12.1255px 12.1255px 24.251px rgba(174, 174, 192, 0.4);
    border-radius: 97.0038px;
    width : 100%;
    max-width : 632px;
    height : 46px;
    padding : 6px;
    >div{
      background: #EEEEEE;
      box-shadow: inset -8.08365px -8.08365px 8.08365px rgba(255, 255, 255, 0.7), inset 8.08365px 8.08365px 16.1673px rgba(174, 174, 192, 0.2);
      border-radius: 97.0038px;
      width : 100%;
      height : 100%;
      display : flex;
      align-items : center;
      padding : 3px 6px;
    }
    >div>div{
      background: #FFCC00;
      box-shadow: 0px 2.23343px 8.93373px rgba(174, 174, 192, 0.25), 4.46687px 4.46687px 6.7003px rgba(174, 174, 192, 0.25);
      border-radius: 26.8012px;
      width : 27px;
      height : 27px;
      cursor : pointer;
    }
`;

const RedCircle = styled(Box)`
  width : 22px;
  height : 22px;
  border-radius : 50%;
  background: #FF0000;
  box-shadow: inset -4px -4px 4px rgba(0, 0, 0, 0.25), inset 4px 4px 4px rgba(255, 255, 255, 0.25);
  overflow : hidden;
  position : absolute;
  top : -14px;
  left : 685px;
`;

const Panel = styled(Box)`
  margin : 0 140px;
  background: #FFFBEC;
  border: 1px solid #FFCC00;
  box-sizing: border-box;
  backdrop-filter: blur(22px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;
  position : relative;
`;

const StyledContainer = styled(Box)`
  position : relative;
  font-size : 16px;
  color : black;
  padding-top : 338px;

`;

const Line = styled(Box)`
  background-image : url('/images/lines.png');
  background-size : 100% 100%;
  width : 169px;
  height : 45px;
  position : absolute;
`;
export default Presale