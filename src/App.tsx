import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Homepage from "./components/Home";
import Navbar from "./components/Navbar";
import Aboutpage from "./components/About/aboutindex";
import Library from "./components/Library";
import Chatbot from "./components/ChatbotAI";
import PlantDetails from ".//components/Library/PlantDetails";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  /* Hide scrollbar for Chrome, Safari, and Opera */
  body::-webkit-scrollbar {
    width: 0;
  }

  /* Hide scrollbar for Firefox */
  body {
    scrollbar-width: none;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const scrollToTop = () => {
  window.scrollTo({ top: 20, behavior: "smooth" });
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />

        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/plantdetails/:id" element={<PlantDetails />} /> 
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
