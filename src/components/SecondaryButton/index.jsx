import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const SecondaryButton = ({ children, width, height }) => {

    return (
        <StyledButton width={width} height={height}>
            <Box>{children}</Box>
            <Box width={'18px'} height={'12px'} mt={'-8px'}>
                <img src={'/images/herosection/arrowright.png'} width={'100%'} height={'100%'} />
            </Box>
        </StyledButton>
    )
}

const StyledButton = styled.button`
    font-family: 'Montserrat';
    display : flex;
    justify-content : center;
    align-items : center;
    width : ${({ width }) => width};
    height : ${({ height }) => height};
    font-size : 18px;
    outline : none;
    background: transparent;
    border: 1px solid #FFCC00;
    color : rgba(0,0,0,0.6);
    box-sizing: border-box;
    border-radius: 35px;
    cursor : pointer;
    z-index : 10;
    position : relative;
    >div:nth-child(2){
        transition : all 0.3s;
        opacity : 0;
        margin-left : -10px;
    }
    :hover{
        >div:nth-child(2){
            opacity : 1;
            margin-left : 10px;
        }
    }
`;

export default SecondaryButton;