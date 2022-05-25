import { useEffect, useState } from "react";
import { Box, TextField } from "@material-ui/core";
import styled from "styled-components";

import BuyButton from "src/components/BuyButton";
import SecondaryButton from 'src/components/SecondaryButton';
import { MdClose } from 'react-icons/md'
import { BiPlus, BiMinus } from "react-icons/bi";
import { BsChevronDown } from 'react-icons/bs'
import { FaExchangeAlt } from 'react-icons/fa'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxHeight: '100%',
        padding: '12px 24px',
        color: 'black',
        border: 'none',
        background: 'transparent',
        fontFamily: 'Montserrat'
    },
};


function BuyModal({ open, setOpen }) {
    console.log(open);
    return (
        <Modal
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <StyledContainer>
                <BuyBitcoin>
                    <Box width={'86px'} height={'86px'}>
                        <img src={'/images/buymodal/bitcoinbuy.png'} width={'100%'} height={'100%'} />
                    </Box>
                </BuyBitcoin>
                <Panel>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box fontSize={'24px'} fontWeight={500}>Buy Sato Tokens</Box>
                        <CloseButton onClick={() => setOpen(false)}>
                            <MdClose color={'red'} />
                        </CloseButton>
                    </Box>
                    <Box mt={'42px'} mb={'55px'}>
                        <InputField>
                            <Box display={'flex'} alignItems={'center'}>
                                <DropDown>
                                    <Box width={'66px'} height={'66px'}>
                                        <img src={'/images/buymodal/bnb.png'} width={'100%'} height={'100%'} />
                                    </Box>
                                    <Box ml={'24px'} mt={'24px'}>
                                        <BsChevronDown fontSize={'20px'} />
                                    </Box>
                                </DropDown>
                                <Box ml={'35px'}>
                                    <StyledInput value={'0.000'} />
                                </Box>
                            </Box>
                            <PulMinus>
                                <Box><BiPlus /></Box>
                                <Box><BiMinus /></Box>
                            </PulMinus>
                        </InputField>
                        <CrossButton >
                            <Box width={'22px'} height={'22px'}>
                                <img src={'/images/buymodal/exchange.png'} width={'100%'} height={'100%'} />
                            </Box>
                        </CrossButton>
                        <InputField mt={'-20px'}>
                            <Box display={'flex'} alignItems={'center'}>
                                <DropDown>
                                    <Box width={'66px'} height={'66px'}>
                                        <img src={'/logo.png'} width={'100%'} height={'100%'} />
                                    </Box>
                                    <Box ml={'24px'} mt={'24px'}>
                                        <BsChevronDown fontSize={'20px'} />
                                    </Box>
                                </DropDown>
                                <Box ml={'35px'}>
                                    <StyledInput value={'0.000'} />
                                </Box>
                            </Box>
                            <PulMinus>
                                <Box><BiPlus /></Box>
                                <Box><BiMinus /></Box>
                            </PulMinus>
                        </InputField>
                    </Box>
                    <BuyButton width={'100%'} height={'113px'} fontSize={'34px'}>
                        <Box fontWeight={500}>Buy SATO</Box>
                    </BuyButton>
                </Panel>
            </StyledContainer>
        </Modal>
    );
}

const CrossButton = styled(Box)`
    background: #FFFBEB;
    border: 0.6px solid #FFCC00;
    box-sizing: border-box;
    border-radius: 18px;
    width : 66px;
    height : 66px;
    cursor : pointer;
    display : flex;
    justify-content : center;
    align-items : center;
    margin-left : 65%;
    margin-top : -20px;
    position : relative;
`;

const PulMinus = styled(Box)`
    font-size : 40px;
    margin-right : 20px;
    >div{
        cursor : pointer;
        margin-top : 20px;
        >svg{
            stroke-width : 1px;
        }
    }
    >div:nth-child(1){
        color : #FFCC00;
    }
    >div:nth-child(2){
        margin-top : -10px;
        color : #5B5B5B;
    }
`;

const StyledInput = styled.input`
    background : transparent;
    font-size : 40px;
    font-weight : 500;
    border : none;
    width : 100%;
    font-family : 'Montserrat';
`;

const DropDown = styled(Box)`
    padding : 25px;
    background-color : white;
    border-radius: 23.07px;
    display : flex;
    cursor : pointer;
`;

const InputField = styled(Box)`
    display : flex;
    background: #FFFBEB;
    border-radius: 27px;
    padding : 10px 15px;
    align-items : center;
    justify-content : space-between;
`;
const CloseButton = styled(Box)`
    border : 1px solid #FF0D0D;
    border-radius : 5px;
    width : 25px;
    height : 25px;
    display : flex;
    justify-content : center;
    align-items : center;
    cursor : pointer;
`;

const Panel = styled(Box)`
    background-color : white;
    padding : 41px 55px;
    border-radius: 41px;
    margin-top : -60px;
`;

const BuyBitcoin = styled(Box)`
    width : 157px;
    height : 157px;
    padding : 21px 35px;
    margin : 0 auto;
    background-color : white;
    border-radius: 46.7409px;
`;

const StyledContainer = styled(Box)`
    
    width : 100vw;
    max-width : 700px;
`;

export default BuyModal