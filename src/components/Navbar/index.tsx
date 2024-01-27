import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  font-size: 10px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer id="home">
      <NavbarContent>
        <Title>LeafLoop</Title>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/aboutpage">About us</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/library">Library</NavLink>
        </NavItem>
        <NavItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink to="/chatbot">AI-LeafBot</NavLink>
        </NavItem>
        
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
