import { useEffect, useState } from "react";
import { Box, TextField } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';
import { FaChevronRight } from 'react-icons/fa'

function Footer({ }) {

    return (
        <StyledContainer>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid rgba(0,0,0,0.1)'} pb={'30px'}>
                <Box width={'50px'} height={'50px'}>
                    <img src={'/logo.png'} width={'100%'} height={'100%'} />
                </Box>
                <Box display={'flex'} alignItems={'center'} >
                    <Box mr={'22px'}>
                        Ready to get started?
                    </Box>
                    <BuyButton width={'138px'} height={'66px'} fontSize={'18px'}>
                        Buy SATO
                    </BuyButton>
                </Box>
            </Box>
            <Box mt={'63px'} display={'flex'} justifyContent={'space-between'}>
                <Box>
                    <Box maxWidth={'181px'} fontSize={'22px'}>Subscribe to our newsletter</Box>
                    <Box mt={'34px'} display={'flex'} borderBottom={'1px solid rgba(0,0,0,0.1)'}>
                        <StyledInput placeholder="Email address" />
                        <SubmitButton>
                            <FaChevronRight fontSize={'16px'} />
                        </SubmitButton>
                    </Box>
                </Box>
                <Box maxWidth={'580px'} display={'flex'} justifyContent={'space-between'} width={'100%'}>
                    <Box width={'100%'} maxWidth={'185px'}>
                        <Box color={'#FFCC00'} fontWeight={500}>Products</Box>
                        <Box fontSize={'14px'} mt={'10px'}>POP </Box>
                        <Box color={'#00000099'} fontSize={'10px'}>
                            Decentralizedsocial media Platform backed by the People.
                        </Box>
                        <Box fontSize={'14px'} mt={'10px'}>POP Network </Box>
                        <Box color={'#00000099'} fontSize={'10px'}>
                            Proof of PeopleConsensusTechnology
                            that relies of People to relay data
                        </Box>
                        <Box fontSize={'14px'} mt={'10px'}>Sahara Wallet </Box>
                        <Box color={'#00000099'} fontSize={'10px'}>
                            Centralized X Decentralized Crypto Exchange.
                        </Box>
                        <Box fontSize={'14px'} mt={'10px'}>Desertwap  </Box>
                        <Box color={'#00000099'} fontSize={'10px'}>
                            A chain to the heart of Pop
                            Network for instance transaction
                        </Box>
                    </Box>

                    <Box width={'100%'} maxWidth={'130px'}>
                        <Box color={'#FFCC00'} fontWeight={500}>DEVS </Box>
                        <Box fontSize={'14px'} mt={'12px'}>Docs </Box>
                        <Box fontSize={'14px'} mt={'12px'}>Pop Network SDK </Box>
                        <Box fontSize={'14px'} mt={'12px'}>Open Source</Box>
                        <Box fontSize={'14px'} mt={'12px'}>Career</Box>
                        <Box fontSize={'14px'} mt={'12px'}>Bounties</Box>
                        <Box fontSize={'14px'} mt={'12px'}>Forum / Chat</Box>
                        <Box fontSize={'14px'} mt={'12px'}>Learning Center</Box>
                    </Box>

                    <Box width={'100%'} maxWidth={'120px'}>
                        <Box color={'#FFCC00'} fontWeight={500}>Join us</Box>
                        <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                            <Box width={'16px'} height={'16px'}>
                                <img src={'/images/footer/smallicons/twitter.png'} width={'100%'} height={'100%'} />
                            </Box>
                            <Box fontSize={'14px'} ml={'5px'}>Twitter </Box>
                        </Box>
                        <Box color={'#00000099'} fontSize={'10px'} mt={'4px'}>
                            Stay in the pulse
                        </Box>
                        <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                            <Box width={'16px'} height={'16px'}>
                                <img src={'/images/footer/smallicons/discord.png'} width={'100%'} height={'100%'} />
                            </Box>
                            <Box fontSize={'14px'} ml={'5px'}>Discord </Box>
                        </Box>
                        <Box color={'#00000099'} fontSize={'10px'} mt={'4px'}>
                            Chat with other traders
                        </Box>
                        <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                            <Box width={'16px'} height={'16px'}>
                                <img src={'/images/footer/smallicons/youtube.png'} width={'100%'} height={'100%'} />
                            </Box>
                            <Box fontSize={'14px'} ml={'5px'}>Youtube </Box>
                        </Box>
                        <Box color={'#00000099'} fontSize={'10px'} mt={'4px'}>
                            Subscribe for tutorials
                        </Box>
                        <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                            <Box width={'16px'} height={'16px'}>
                                <img src={'/images/footer/smallicons/medium.png'} width={'100%'} height={'100%'} />
                            </Box>
                            <Box fontSize={'14px'} ml={'5px'}>Reddit </Box>
                        </Box>
                        <Box color={'#00000099'} fontSize={'10px'} mt={'4px'}>
                            Post on our forums
                        </Box>
                        <Box display={'flex'} alignItems={'center'} mt={'10px'}>
                            <Box width={'16px'} height={'16px'}>
                                <img src={'/images/footer/smallicons/linkedin.png'} width={'100%'} height={'100%'} />
                            </Box>
                            <Box fontSize={'14px'} ml={'5px'}>LinkedIn </Box>
                        </Box>
                        <Box color={'#00000099'} fontSize={'10px'} mt={'4px'}>
                            View our open roles
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'} color={'#00000099'} alignItems={'center'} mt={'65px'}>
                <Box>copyright 2022 Sahara Labs</Box>
                <Box>Privacy Policy</Box>
                <Box>Terms & Conditions</Box>
                <Socials>
                    <Box width={'30px'} height={'30px'}>
                        <img src={'/images/footer/telegram.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box width={'30px'} height={'30px'}>
                        <img src={'/images/footer/github.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box width={'30px'} height={'30px'}>
                        <img src={'/images/footer/discord.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box width={'30px'} height={'30px'}>
                        <img src={'/images/footer/youtube.png'} width={'100%'} height={'100%'} />
                    </Box>
                    <Box width={'30px'} height={'30px'}>
                        <img src={'/images/footer/reddit.png'} width={'100%'} height={'100%'} />
                    </Box>
                </Socials>
            </Box>
        </StyledContainer>
    );
}

const Socials = styled(Box)`
    display : flex;
    justify-content : space-between;
    width : 100%;
    max-width : 200px;
    >div{
        cursor : pointer;
    }
`;

const SubmitButton = styled(Box)`
    background: #FFCC00;
    border-radius: 12px;
    width : 50px;
    height : 50px;
    display : flex;
    justify-content : center;
    align-items :  center;
    cursor : pointer;
`;

const StyledInput = styled.input`
    background : transparent;
    width : 250px;
    border:none;
    font-size : 16px;
`;

const StyledContainer = styled(Box)`
    background: #FFFCEE;
    padding : 50px 203px 75px 224px;
`;

export default Footer