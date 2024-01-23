// Navbar.js
import styled from 'styled-components';
import { Link } from 'react-scroll';
import "../styles.css";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  position: relative; /* Fixed positioning to keep the navbar at the top */
  top: 0;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  backdrop-filter: blur(30px);
  border-radius:px;
  z-index: 1000; /* Ensure the navbar appears above other elements */
`;
const NavbarLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
color:white;
font-family: 'Lombok', sans-serif;
font-size: 1.2em; 
  margin-right: 60px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer id="home">
      <NavbarLinks>
        <NavLink to="home" smooth={true} duration={500}>
        HOME
        </NavLink>
        <NavLink to="about" smooth={true} duration={500}>
        ABOUT
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500}>
        CONTACT
        </NavLink>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
