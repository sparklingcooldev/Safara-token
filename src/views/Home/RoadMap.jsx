import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';
import YellowCircle from "src/components/Roadmap/YellowCircle";

function RoadMap() {

  return (
    <StyledContainer>
      <Light />
      <Box px={'140px'}>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Box>
            <Box color={'#EBBC00'} mt={'300px'}>
              What’s the Plan?
            </Box>
            <Box mt={'23px'} fontSize={'34px'}>
              Our <span style={{ color: '#FFCC00' }}>Roadmap</span>
            </Box>
            <Box color={'rgba(0, 0, 0, 0.7)'} maxWidth={'490px'} mt={'30px'}>
              At Sahara Labs we have an unflinching but simple intuition to build secure,
              trusted and decentralized infrastructures for the people.
            </Box>
          </Box>
          <Box alignSelf={'end'}>
            < SecondaryButton width={'186px'} height={'66px'} fontSize={'18px'}>
              Learn more
            </SecondaryButton>
          </Box>
        </Box>
        <Box ml={'40%'} width={'100px'}>
          <img src={'/images/roadmap/symbol.png'} width={'100%'} height={'100%'} />
        </Box>
        <Box mt={'50px'}>
          <RoadMapPanel>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={'38px'}>
              <Box fontSize={'14px'} color={'#FFCC00'} fontWeight={600}>
                Please note that no roadmaps are final, expect chaos
              </Box>
              <Box display={'flex'} justifyContent={'space-between'} fontSize={'10px'} color={'#FFCC00'}>
                <Box display={'flex'} alignItems={'center'} width={'135px'}>
                  <Box width={'21px'} mt={'3px'}>
                    <img src={'/images/roadmap/vector1.png'} width={'100%'} height={'100%'} />
                  </Box>
                  <Box ml={'6px'}>Query Sator</Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} width={'135px'}>
                  <Box width={'21px'} mt={'3px'}>
                    <img src={'/images/roadmap/vector2.png'} width={'100%'} height={'100%'} />
                  </Box>
                  <Box ml={'6px'}>Query Network</Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} width={'135px'}>
                  <Box width={'21px'} mt={'3px'}>
                    <img src={'/images/roadmap/vector3.png'} width={'100%'} height={'100%'} />
                  </Box>
                  <Box ml={'6px'}>SubQuery Projects</Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} width={'135px'}>
                  <Box width={'21px'} mt={'3px'}>
                    <img src={'/images/roadmap/vector4.png'} width={'100%'} height={'100%'} />
                  </Box>
                  <Box ml={'6px'}>Other</Box>
                </Box>
              </Box>
            </Box>
            <Box mt={'50px'}>
              <Box display={'flex'} height={'188px'}>
                <Box width={'100%'} maxWidth={'268px'} position={'relative'}>
                  <Box width={'65px'} mt={'25px'} ml={'25%'}>
                    <img src={'/images/bitcoin.png'} width={'100%'} height={'100%'} />
                  </Box>
                  <Box fontSize={'10px'} fontWeight={500} position={'absolute'} bottom={'24px'} width={'100%'} textAlign={"center"}>
                    Mid of Q4 2021
                  </Box>
                </Box>
                <Box fontSize={'10px'} borderLeft={'1px solid #FFCC00'} pl={'14px'} height={'100%'} maxWidth={'305px'} position={'relative'} width={'100%'}>
                  <Box fontSize={'14px'} color={'#FFCC00'}>Milestone 1</Box>
                  <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv4.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>SubQuery Builders/Grants Program</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>SQT Network contract internal MVP</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Coordinator and client SDK</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv3.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>implementations</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv1.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>EU imporvements</Box>
                  </Box>
                  <Box fontSize={'10px'} fontWeight={500} position={'absolute'} left={'0'} bottom={'24px'} width={'100%'} textAlign={"center"}>
                    Mid Q1 2022
                  </Box>
                  <YellowCircle bottom={'-11px'} left={'-11px'} />
                </Box>

                <Box fontSize={'10px'} borderLeft={'1px solid #FFCC00'} pl={'14px'} height={'100%'} maxWidth={'305px'} position={'relative'} width={'100%'}>
                  <Box fontSize={'14px'} color={'#FFCC00'}>Milestone 3</Box>
                  <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>SQT token generation event</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Public incentivised testnet launch </Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv3.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Data traffic insights and reporting</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv3.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Scalable intelligent routing</Box>
                  </Box>
                  <Box fontSize={'10px'} fontWeight={500} position={'absolute'} left={'0'} bottom={'24px'} width={'100%'} textAlign={"center"}>
                    Mid Q2 2022
                  </Box>
                  <YellowCircle bottom={'-11px'} left={'-11px'} />
                </Box>

                <Box fontSize={'10px'} borderLeft={'1px solid #FFCC00'} pl={'14px'} height={'100%'} maxWidth={'305px'} position={'relative'} width={'100%'}>
                  <Box fontSize={'14px'} color={'#FFCC00'}>Milestone 5</Box>
                  <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Mainnet Launch</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Centralised exchange launch</Box>
                  </Box>
                  <YellowCircle bottom={'-11px'} left={'-11px'} />
                </Box>
              </Box>
              <Divider />
              <Divider position={'absolute'} top = {'180px'}/>
            </Box>

            <Box ml={'120px'} mt={'-3px'}>
              <Box display={'flex'} >
                <Box fontSize={'10px'} height={'160px'} borderLeft={'1px solid #FFCC00'} pl={'14px'} maxWidth={'284px'} position={'relative'} width={'100%'}>
                  <Box fontSize={'14px'} color={'#FFCC00'} mt={'55px'}>Now</Box>
                  <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv1.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>EVM support for parachains</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv4.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>SubQuery Academy</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv1.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Proof of indexing</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv3.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Premium enterprise service</Box>
                  </Box>

                  <Box fontSize={'10px'} fontWeight={500} position={'absolute'} left={'0'} top={'20px'} width={'100%'} textAlign={"center"}>
                    End of Q4 2021
                  </Box>
                  <YellowCircle top={'-11px'} left={'-11px'} active={true} />
                </Box>

                <Box fontSize={'10px'} height={'200px'} borderLeft={'1px solid #FFCC00'} pl={'14px'} maxWidth={'284px'} position={'relative'} width={'100%'}>
                  <Box fontSize={'14px'} color={'#FFCC00'} mt={'55px'}>Milestone 2</Box>
                  <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Public testnet launch</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>SubQuery Network Explorer and dApp</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv1.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Point-in-time indexing</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>SQT Network contract v1 and external code</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv3.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>audit</Box>
                  </Box>
                  <Box display={'flex'} mt={'4px'}>
                    <Box width={'13px'} height={'13px'}>
                      <img src={'/images/roadmap/colorv3.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>
                      <Box >Internal micropayments testing</Box>
                      <Box mt={'4px'}>Enterprise health monitoring</Box>
                    </Box>
                  </Box>

                  <Box fontSize={'10px'} fontWeight={500} position={'absolute'} left={'0'} top={'20px'} width={'100%'} textAlign={"center"}>
                    End of Q1 2022
                  </Box>
                  <YellowCircle top={'-11px'} left={'-11px'} />
                </Box>

                <Box fontSize={'10px'} height={'143px'} borderLeft={'1px solid #FFCC00'} pl={'14px'} maxWidth={'284px'} position={'relative'} width={'100%'}>
                  <Box fontSize={'14px'} color={'#FFCC00'} mt={'55px'}>Milestone 4</Box>
                  <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv4.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Launch of the SubQuery Foundation</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv4.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>Finalise research for other Layer-1</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box mt={'4px'} ml={'5px'}>
                      <Box>chains</Box>
                      <Box>Liquidity mining program</Box>
                    </Box>
                  </Box>
                  <Box fontSize={'10px'} fontWeight={500} position={'absolute'} left={'0'} top={'20px'} width={'100%'} textAlign={"center"}>
                    End of Q2 2022
                  </Box>
                  <YellowCircle top={'-11px'} left={'-11px'} />
                </Box>

                <Box fontSize={'10px'} height={'146px'} borderLeft={'1px solid #FFCC00'} pl={'14px'} position={'relative'} >
                  <Box fontSize={'14px'} color={'#FFCC00'} mt={'55px'}>Milestone 6</Box>
                  <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv2.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>SubQuery launches its own parachain</Box>
                  </Box>
                  <Box display={'flex'} alignItems={'center'} mt={'4px'}>
                    <Box width={'13px'}>
                      <img src={'/images/roadmap/colorv4.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box ml={'5px'}>SubQuery Foundation moves towards a DAO</Box>
                  </Box>


                  <YellowCircle top={'-11px'} left={'-11px'} />
                </Box>
              </Box>
            </Box>
          </RoadMapPanel>
        </Box>
      </Box >
    </StyledContainer >
  );
}

const Divider = styled(Box)`
  background: linear-gradient(294.72deg, #FFAA6C 9.05%, #FFCC00 79.28%);
  opacity: 0.1;
  width : calc(100% + 280px);
  margin-left : -140px;
  height : 6px;
  margin-top : -3px;
`;

const RoadMapPanel = styled(Box)`
  background: linear-gradient(75.14deg, #FFFFFF -0.81%, rgba(255, 255, 255, 0.41) 101.57%);
  border: 4px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 33px;
  position : relative;
  padding-right : 24px;
`;

const StyledContainer = styled(Box)`
  position : relative;
  font-size : 16px;
  color : black;
  overflow : hidden;
`;

const Light = styled(Box)`
  position : absolute;
  background-image : url('/images/roadmap/Light.png');
  background-size : 100% 100%;
  width : 900px;
  height: 800px;
  top : 150px;
  right : -100px;
`;


export default RoadMap