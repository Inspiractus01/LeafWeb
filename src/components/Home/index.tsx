import React from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';
import "../styles.css";

const ColorizedDiv = styled.div`
  position: relative;
  color: white;
  height: 100vh;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: 'Lombok';
  font-size: 6em;
  z-index: 1;
`;

const StyledTypewriterWrapper = styled.div`
padding-top:3vh;
  font-family: 'Regular-r';
  font-size: 2.4em;
  z-index: 1;
`;

const Textdiv = styled.div`
  margin: 0;
  padding-left: 9vh;
  padding-top: 35vh;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

function Homepage() {
  return (
    <>
      <ColorizedDiv id="homepage">
        <Textdiv>
          <Title>HI !</Title>
          <Title>I'M MICHAL MUCHA</Title>
          <StyledTypewriterWrapper>
            <Typewriter
              cursor
              cursorStyle='_'
              words={[
                'Software Developer',
                'Coding Enthusiast',
                'Tech Explorer',
                'Snowboarding Master',
                'Gaming Aficionado',
                'Music Lover',
                'Algorithm Magician',
                'Code Artisan',
                'Student Extraordinaire',
                'School Survivor',
                'Snowboarding Scholar',
                'Skateboard Maestro',
                'Funny Joker',
                'Code Poet',
                'Happiness Seeker',
              ]}
              loop={true}
              typeSpeed={100}
              deleteSpeed={30}
              delaySpeed={4000}
            />
          </StyledTypewriterWrapper>
        </Textdiv>
      </ColorizedDiv>
    </>
  );
}

export default Homepage;
