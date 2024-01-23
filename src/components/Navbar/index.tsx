import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "../styles.css";

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

const NavLink = styled(Link)`
  padding-left: 2vh;
  color: white;
  font-family: 'Regular-r', sans-serif;
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.div`
  font-family: 'Regular-r', sans-serif;
  font-size: 1em;
`;

const Navbar = () => {
  return (
    <NavbarContainer id="home">
      <NavbarContent>
        <Title>LeafLoop</Title>
        <div>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/aboutpage">ABOUT</NavLink>
        </div>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
