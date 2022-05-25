import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';
import TeamMember from "src/components/TeamMember/TeamMember";

function Team() {

  return (
    <StyledContainer>
      <Box color={'#EBBC00'}>Our team?</Box>
      <Box mt={'24px'} fontSize={'34px'} fontWeight={'500'}>
        We're <span style={{ color: '#FFCC00' }}>storonger</span> togrther
      </Box>
      <Box display={'flex'} justifyContent={'space-between'} mt={'23px'}>
        <Box color={'#000000B2'} maxWidth={'490px'}>
          The Sahara Token Team combines a passion for community projects with their expertise in finance,
          software development & marketing .
        </Box>
        < SecondaryButton width={'186px'} height={'66px'} fontSize={'18px'}>
          Learn more
        </SecondaryButton>
      </Box>
      <Box mt={'100px'} display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
        <TeamMember avatar={'/images/team/avatar1.png'} />
        <TeamMember avatar={'/images/team/avatar2.png'} />
        <TeamMember avatar={'/images/team/avatar3.png'} />
        <TeamMember avatar={'/images/team/avatar4.png'} />
      </Box>
    </StyledContainer >
  );
}


const StyledContainer = styled(Box)`
  position : relative;
  font-size : 16px;
  color : black;
  padding : 0 140px;
  padding-top : 175px;
  margin-bottom : 208px;
`;

export default Team