import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';

function CanBuild() {

  return (
    <StyledContainer>
      <Box px={'140px'}>
        <Box color={'#EBBC00'}>What can we Build?</Box>
        <Box display={'flex'} mt={'20px'}>
          <Box width={'50%'}>
            <Box mt={'17px'} fontSize={'34px'} fontWeight={500} maxWidth={'535px'}>
              <span style={{ color: '#FFCC00' }}>POP</span> – Social Media Platform that focus on Blockchain and Privacy.
            </Box>
            <Box maxWidth={'490px'} mt={'33px'} color={'rgb(0,0,0,0.7)'}>
              To build a truly decentralized technology, Sahara Labs will be developing POP
              ‘a social media platform’ Wrapped around the principle of Blockchain Metaverse.
              Pop will be built on top of the POP Network Blockchain and POP Consensus –
              A Proof of People Blockchain consensus that rewards People through their Daily
              on-chain Actions on the POP Platform.
            </Box>
          </Box>
          <Box width={'50%'}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <Box display={'flex'} alignItems={'center'}>
                <Box width={'46px'}>
                  <img src={'/images/building/transactionfee.png'} width={'100%'} height={'100%'} />
                </Box>
                <Box ml={'12px'}>
                  <Box fontSize={'18px'}>Decentralized Platform</Box>
                  <Box color={'rgb(0,0,0,0.7)'} fontSize={'12px'}>Onchain Decentralized Data Storage</Box>
                </Box>
              </Box>
              <LearnMore >
                <Box border={'1px solid #FFCC00'} mr={'10px'} height={'45px'} />
                <Box fontSize={'18px'} color={'#898989'}>Learn more </Box>
                <Box width={'18px'} height={'12px'} mt={'-6px'} ml={'10px'}>
                  <img src={'/images/herosection/arrowright.png'} width={'100%'} height={'100%'} />
                </Box>
              </LearnMore>
            </Box>

            <Box display={'flex'} justifyContent={'space-between'} mt={'35px'}>
              <Box display={'flex'} alignItems={'center'} >
                <Box width={'46px'}>
                  <img src={'/images/building/built.png'} width={'100%'} height={'100%'} />
                </Box>
                <Box ml={'12px'}>
                  <Box fontSize={'18px'}>Built on Trust</Box>
                  <Box color={'rgb(0,0,0,0.7)'} fontSize={'12px'}>All transactions are free now</Box>
                </Box>

              </Box>
              <Box display={'flex'} alignItems={'center'} >
                <Box width={'46px'}>
                  <img src={'/images/building/backed.png'} width={'100%'} height={'100%'} />
                </Box>
                <Box ml={'12px'}>
                  <Box fontSize={'18px'}>Backed by the People</Box>
                  <Box color={'rgb(0,0,0,0.7)'} fontSize={'12px'}>All transactions are free now</Box>
                </Box>
              </Box>
            </Box>
            <Box mt={'110px'}>
              <BuyButton width={'275px'} height={'66px'} fontSize={'18px'}>
                Docs Reference
              </BuyButton>
            </Box>
          </Box>
        </Box>
        <Box width={'1100px'} mx={'auto'} mt={'20px'}>
          <img src={'/images/canbuild/mac.png'} width={'100%'} height={'100%'} />
        </Box>
      </Box>
      <Contract />
    </StyledContainer >
  );
}


const StyledContainer = styled(Box)`
  position : relative;
  font-size : 16px;
  color : black;
  padding-top : 198px;
`;
const LearnMore = styled(Box)`
  display : flex;
  align-items : center;
  width : 255px;
  cursor : pointer;
`;
const Contract = styled(Box)`
  margin-top : -195px;
  background-image : url('/images/about/contract.png');
  background-size : 100% 100%;
  height : 130px;
  width : 100%;
  padding : 36px 12px;
  display : flex;
  align-items : center;
`;

export default CanBuild