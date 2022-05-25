import { useEffect, useState, useRef } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import BuyButton from "src/components/BuyButton";
import "./topbar.scss";
import { GiHamburgerMenu } from 'react-icons/gi'
import useMediaQuery from "@material-ui/core/useMediaQuery";

function TopBar({ setOpen }) {

  const [hamactive, setHamActive] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 850px)");
  const dialog = useRef();

  useEffect(() => {

    document.addEventListener('mouseup', function (event) {
      if (dialog.current && !dialog.current.contains(event.target)) {
        setHamActive(false);
      }
    });
  }, []);

  return (
    <StyledContainer>
      <Navbar>
        <Box display={'flex'} justifyContent={'space-between'} width={'100%'} maxWidth={'520px'} height={'100%'} alignItems={'center'}>
          <Box width={'50px'} height={'50px'} >
            <img src={'/logo.png'} alt={'logo'} width={'100%'} height={'100%'} />
          </Box>
          <Menu >
            <Box>Home</Box>
            <Box>About</Box>
            <Box>Company</Box>
            <Box>Features</Box>
            <Box>Products</Box>
          </Menu>
        </Box>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} maxWidth={smallScreen ? '170px' : '283px'} width={'100%'}>
          <Box fontSize={'18px'} style={{ cursor: 'pointer' }} display={smallScreen ? 'none' : ''}>Whitepaper</Box>
          <Divider display={smallScreen ? 'none' : ''} />
          <BuyButton width={'115px'} height={'48px'} fontSize={'16px'} onClick={() => setOpen(true)}>Buy SATO</BuyButton>
          <Hamburger onClick={() => setHamActive(!hamactive)}>
            <GiHamburgerMenu fontSize={'35px'} />
          </Hamburger>
          <div ref={dialog}>
            <HamburgerMenu active={hamactive}>
              <Box>Home</Box>
              <Box>About</Box>
              <Box>Company</Box>
              <Box>Features</Box>
              <Box>Products</Box>
              <Box>WhitePaper</Box>
            </HamburgerMenu>
          </div>
        </Box>
      </Navbar>
    </StyledContainer>
  );
}

const HamburgerMenu = styled(Box)`
  overflow : hidden;
  position : absolute;
  top : 80px;
  width : 100%;
  max-width : 250px;
  right : ${({ active }) => active ? '0px' : '-400px'};
  >div{
    padding : 10px 30px;
    cursor : pointer;
    transition : all 0.2s;
    font-weight : bold;
    :hover{
      color : tomato;
      margin-left : 10px;
    }
  }
  >div:first-child{
      padding-top : 30px;
  }
  >div:last-child{
    padding-bottom : 30px;
  }
  background-color : #FFCC00;
  transition : all 0.6s;
`;
const Hamburger = styled(Box)`
  margin-top : 5px;
  cursor : pointer;
  display : none;
  @media screen and (max-width : 850px){
    display : unset;
  }
`;

const Navbar = styled(Box)`
  border-bottom : 1px solid #D8D8D8;
  width: 100%;
  display : flex;
  align-items : center;
  justify-content : space-between;
  height : 70px;
  position : relative;
`;
const StyledContainer = styled(Box)`
  background-color : white;
  padding : 28px 140px 0px 140px;
  color : rgba(0,0,0,0.6);
  font-size : 16px;
  @media screen and (max-width : 1000px){
    padding : 28px 20px 0px 20px;
  }
`;

const Menu = styled(Box)`
  display : flex;
  justify-content : space-between;
  align-items : center;
  width : 100%;
  max-width :  425px;
  >div{
    cursor : pointer;
    height : 69px;
    justify-content : center;
    align-items : center;
    display : flex;
    z-index : 10;
    position : relative;
  }
  >div:nth-child(1){
    color : #FFCC00;
    border-bottom : 2px solid #FFCC00;
  }
  @media screen and (max-width : 850px){
    display : none;
  }
`;

const Divider = styled(Box)`
  margin-top : 7px;
  width : 1px;
  border-left : 1px solid #FFCC00;
  height : 55px;
  margin-bottom : 8px;
`;

const StyledButton = styled.button`
font-family: 'Montserrat';
  display : flex;
  justify-content : center;
  align-items : center;
  width : 115px;
  height : 48px;
  font-size : 16px;
  outline : none;
  background: #FFCC00;
  border: 1px solid #FDFDFD;
  box-sizing: border-box;
  border-radius: 35px;
  cursor : pointer;
`;
export default TopBar;
