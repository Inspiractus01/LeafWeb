import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import Homepage from './components/Home';
import Navbar from './components/Navbar';
import Aboutpage from './components/About/aboutindex';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const GradientBackground = styled(motion.div)`
  background: linear-gradient(to top, #888888, #ffffff);
  min-height: 100vh;
  overflow: hidden;
  transition: background 0.5s ease-in-out;
`;

const AppContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const scrollToTop = () => {
  window.scrollTo({ top: 20, behavior: 'smooth' });
};

const App: React.FC = () => {
  return (
    <Router>
      <GradientBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AppContainer>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutpage" element={<Aboutpage />} />
          </Routes>
          <ScrollToTopButton onClick={scrollToTop}>Scroll to Top</ScrollToTopButton>
        </AppContainer>
      </GradientBackground>
    </Router>
  );
};

export default App;
