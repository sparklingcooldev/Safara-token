import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';

function TeamMember({ name, title, content, avatar }) {

    return (
        <StyledContainer>
            <Avatar mx={'auto'} width={'fit-content'}>
                <Box></Box>
                <Box>
                    <img src={avatar} width={'100%'} height={'100%'} />
                </Box>
            </Avatar>
            <Panel mt={'-55px'}>
                <Box mt={'92px'} fontSize={'20px'} fontWeight={500}>
                    -Yeb Timotheous-
                </Box>
                <Box mt={'18px'}>
                    LEAD DEVELOPER
                </Box>
                <Box mt={'30px'} maxWidth={'207px'} textAlign={'center'} fontSize={'14px'}>
                    Hi, I’m Yeb. I’m the Lead Developer here at Sahara Token.
                    I’m based in Ghana and have been working as a Full Stack Developer
                    for the past 5 years.
                </Box>
                <SocalPanel mt={'50px'} mb={'22px'}>
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
                </SocalPanel>
            </Panel>
        </StyledContainer>
    );
}

const SocalPanel = styled(Box)`
    width : 100%;
    max-width : 135px;
    display : flex;
    justify-content : space-between;
    >div{
        width : 21px;
        height : 21px;
        cursor : pointer;
      }
`;

const Panel = styled(Box)`
    width : 100%;
    background: #FFF9E0;
    border-radius: 39px;
    display : flex;
    flex-direction : column;
    align-items : center;
`;

const Avatar = styled(Box)`
    display : flex;
    >div{
        border-radius: 39px;
        overflow : hidden;
        width : 106px;
        height : 106px;
    }
    >div:nth-child(1){
        background: #FFCC00;
    }
    >div:nth-child(2){
        margin-left : -95px;
        margin-top : -6px;
    }
`;

const StyledContainer = styled(Box)`
    margin-bottom : 30px;
    width : 280px;
`;

export default TeamMember