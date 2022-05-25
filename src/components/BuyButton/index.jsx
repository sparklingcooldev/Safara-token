import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import style from './style.module.css';

const BuyButton = ({ children, width, height, fontSize, onClick }) => {

    return (
        <StyledContainer>
            <StyledButton className={`${style.btn} ${style.btnwhite} ${style.btnanimate}`} width={width} height={height} fontSize={fontSize} onClick = {onClick}>
                {children}
            </StyledButton>
        </StyledContainer>
    )
}

const StyledContainer = styled(Box)`
    position : relative;
`;
const StyledButton = styled.button`
 
    font-family: 'Montserrat';
    display : flex;
    justify-content : center;
    align-items : center;
    width : ${({ width }) => width};
    height : ${({ height }) => height};
    font-size : ${({ fontSize }) => fontSize};
    outline : none;
    background-color: #FFCC00;
    border: none;
    color : rgb(0,0,0);
    box-sizing: border-box;
    border-radius: 35px;
    cursor : pointer;
    z-index : 10;
    position : relative;
    transition : background-color 0.3s;
`
export default BuyButton