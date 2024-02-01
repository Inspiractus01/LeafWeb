import { Link } from "react-router-dom";
import { motion,useScroll,useSpring } from "framer-motion";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 25px;
  border-radius: 0px;
  background-color: #363434;
  color: white;
  z-index: 1000;
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media(max-width:900px){
    width:98%;
    justify-content:space-around;
    gap:0px;
  }
`;

const NavItem = styled(motion.div)`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  font-family: "Regular-r", sans-serif;
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: under-widthline;
  }
  @media(max-width:900px){
    font-size: 10px;
  }
`;

const Title = styled.div`
  font-family: "Regular-r", sans-serif;
  font-size: 1em;
  padding-right: 30px;
  @media(max-width:900px){
    padding-right: 10px;
    margin-left:0px;
    padding-left:0px;
  font-size: 10px;
  }
`;

const Scrolldiv = styled(motion.div)`
  background-color: #2ab96b;
  height: 100%;
  position: fixed;
  height: 10px;
  top: 99.3vh;
  left: 0;
  right: 0;
  z-index: 999;
  transform-origin: 0%;

  @media(max-width:900px){

    background-color: transparent;
  }
  
`;


const Navbar = () => {

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const resetScroll = () => {
    // Use any method you prefer to scroll to the top
    window.scrollTo({ top: 0, behavior: 'fast' });
  };

  return (
    <NavbarContainer id="home">
      
      <NavbarContent>

        <Scrolldiv style={{ scaleX: scaleY }} />
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/" onClick={resetScroll}>LeafLoop</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/aboutpage" onClick={resetScroll}>O nás</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/library" onClick={resetScroll}>Knižnica</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/chatbot" onClick={resetScroll}>AI-LeafBot</NavLink>
        </NavItem>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
