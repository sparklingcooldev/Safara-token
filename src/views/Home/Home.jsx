import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import HeroSection from './HeroSection'
import Tracker from "./Tracker";
import About from "./About";
import Presale from "./Persale";
import Build from "./Build";
import CanBuild from "./CanBuild";
import RoadMap from "./RoadMap";
import PresentSection from './PresentSection';
import Team from "./Team";
import BuyModal from '../../components/BuyModal'

function Home({ open, setOpen}) {
  return (
    <StyledContainer>
      <HeroSection setOpen={setOpen} />
      {/* <Tracker setOpen={setOpen} />
      <About setOpen={setOpen} />
      <Presale setOpen={setOpen} />
      <Build setOpen={setOpen} />
      <CanBuild setOpen={setOpen} />
      <RoadMap setOpen={setOpen} />
      <PresentSection setOpen={setOpen} />
      <Team setOpen={setOpen} /> */}
    </StyledContainer >
  );
}


const StyledContainer = styled(Box)`
  min-height: 100vh;
  width: 100%;
  background-color : white!important;
  color : black;
`;


export default Home