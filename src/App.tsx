// App.js
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styled, { createGlobalStyle } from 'styled-components';
import About from './components/About';
import Contact from './components/Contact';
import Homepage from './components/Home';
import Navbar from './components/Navbar';
import backgroundImage from './components/Home/bcg.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url(${backgroundImage}) center/cover fixed; // Set your background image
  }
`;

const Body = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Body>
      <GlobalStyle />
      <Navbar />
      <Homepage />
      <About />
      <Contact />
      <button onClick={scrollToTop}>Scroll to Top</button>
    </Body>
  );
}

export default App;