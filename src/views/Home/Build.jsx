import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';

function Build() {

  return (
    <StyledContainer>
      <Bitcoin ml={'39%'} mt={'142px'} />
      <Box display={'flex'}>
        <Box width={'50%'} pt={'187px'} pl={'140px'}>
          <Box color={'#EBBC00'}>
            What are we Building?
          </Box>
          <Box fontSize={'34px'} fontWeight={'500'} mt={'24px'}>
            Sahara Wallet - The first Centralized X Decentralized Exchange. <span style={{ color: '#FFCC00' }}>CEXD</span>
          </Box>
          <Box mt={'24px'} color={'rgb(0,0,0,0.6)'}>
            Sahara Wallet will be serving as a Centralized X Decentralized Exchange.
            It will be built to focus on Developing Countries,
            in order to bring more people inline with blockchain (Banking the Bankless).
            Sahara Wallet will have store Data directly on the POP Network, with no Centralized Server.
          </Box>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} mt={'35px'}>
              <Box width={'46px'}>
                <img src={'/images/building/transactionfee.png'} width={'100%'} height={'100%'} />
              </Box>
              <Box ml={'12px'}>
                <Box fontSize={'18px'}>No transaction fee</Box>
                <Box color={'rgb(0,0,0,0.7)'} fontSize={'12px'}>All transactions are free now</Box>
              </Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} mt={'35px'}>
              <Box width={'46px'}>
                <img src={'/images/building/backed.png'} width={'100%'} height={'100%'} />
              </Box>
              <Box ml={'12px'}>
                <Box fontSize={'18px'}>Backed by the People</Box>
                <Box color={'rgb(0,0,0,0.7)'} fontSize={'12px'}>All transactions are free now</Box>
              </Box>
            </Box>
          </Box>

          <Box display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} mt={'35px'}>
              <Box width={'46px'}>
                <img src={'/images/building/built.png'} width={'100%'} height={'100%'} />
              </Box>
              <Box ml={'12px'}>
                <Box fontSize={'18px'}>Built on Trust</Box>
                <Box color={'rgb(0,0,0,0.7)'} fontSize={'12px'}>All transactions are free now</Box>
              </Box>
            </Box>
            <LearnMore >
              <Box border={'1px solid #FFCC00'} height={'100%'} mr={'10px'} />
              <Box fontSize={'18px'} color={'#898989'}>Learn more </Box>
              <Box width={'18px'} height={'12px'} mt={'-6px'} ml={'10px'}>
                <img src={'/images/herosection/arrowright.png'} width={'100%'} height={'100%'} />
              </Box>
            </LearnMore>
          </Box>
          <Box mt={'60px'}>
            <BuyButton width={'275px'} height={'66px'} fontSize={'18px'}>Doc Reference</BuyButton>
          </Box>
        </Box>
        <Box width={'55%'} mt={'-3vw'} ml={'-5%'}>
          <img src={'/images/building/right.png'} width={'100%'} height={'100%'} />
        </Box>
      </Box>
      <Box px={'140px'}>
        <Box bgcolor={'#EECD4733'} width={'100%'} height={'5px'} />
      </Box>
    </StyledContainer >
  );
}

const LearnMore = styled(Box)`
  display : flex;
  align-items : center;
  margin-top : 35px;
  width : 255px;
  cursor : pointer;
`;

const Bitcoin = styled(Box)`
  background-image : url('/images/bitcoin.png');
  background-size : 100% 100%;
  width : 28px;
  height : 28px;
  filter: blur(2.1108px);
`;

const StyledContainer = styled(Box)`
  position : relative;
  font-size : 16px;
  color : black;

`;


export default Build