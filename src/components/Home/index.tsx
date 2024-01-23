import React from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import '../styles.css';

const ColorizedDiv = styled.div`
  position: relative;
  color: white;
  height: 100vh;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden;
  background-color: #2AB96B; /* Change the background color here */
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Regular-R';
  font-size: 3.5em;
  z-index: 1;
`;

const Titleleaf = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding-top: 4vh;
  padding-left: 8vh; /* Adjust padding as needed */
  font-family: 'Regular-R';
  font-size: 1.4em;
  z-index: 2; /* Ensure it appears above other elements */
`;

const StyledTypewriterWrapper = styled.div`
  padding-top: 3vh;
  font-family: 'Regular-r';
  font-size: 1.3em;
  z-index: 1;
`;

const Textdiv = styled.div`
  margin: 0;
  padding-left: 8vh;
  padding-top: 20vh;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Button = styled(motion.button)`
  position: absolute;
  top: 2.5vh;
  right: 5vh;
  margin: 0;
  padding: 1.3vh 3vh; /* Adjust padding to make it smaller */
  font-family: 'Regular-R';
  font-size: 1em; /* Adjust font size */
  background-color: #2AB96B; /* Same as ColorizedDiv background color */
  color: white;
  border: 2px solid white; /* White border */
  border-radius: 10px; /* Add border radius */
  cursor: pointer;
`;

const Homepage = () => {
  const handleExploreNowClick = () => {
    window.location.href = '/aboutpage';
  };

  return (
    <>
      <ColorizedDiv id="homepage">
        <Titleleaf>LeafLoop</Titleleaf>
        <Textdiv>
          <Title>Personalised</Title>
          <Title>help with</Title>
          <Title>plants</Title>
          <StyledTypewriterWrapper>
            <Typewriter
              cursor
              cursorStyle='_'
              words={[
                'Personalized care advice for your plants!',
                'Create a thriving green haven with tailored guidance!',
                'Unlock custom tips for your unique plant companions!',
                'Your plants, our personalized expertise!',
                'Expert advice to enhance your plant parenting!',
                'Tailored care tips for your beloved green friends!',
                'Nurture your plants with personalized care insights!',
                'Get bespoke advice for a flourishing plant life!',
                'Elevate your plant care journey with personalized tips!',
                'Your green companions deserve personalized attention!',
              ]}
              loop={true}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={6000}
            />
          </StyledTypewriterWrapper>
        </Textdiv>
        <Button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleExploreNowClick}
        >
          Explore Now
        </Button>
      </ColorizedDiv>
    </>
  );
};

export default Homepage;
