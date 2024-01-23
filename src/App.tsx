import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import styled, { createGlobalStyle } from 'styled-components';
import Homepage from './components/Home';
import Navbar from './components/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Body = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const scrollToTop = () => {
  scroll.scrollToTop();
};

const App: React.FC = () => {
  return (
    <Router>
      <Body>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <ScrollToTopButton onClick={scrollToTop}>Scroll to Top</ScrollToTopButton>
      </Body>
    </Router>
  );
}

export default App;
