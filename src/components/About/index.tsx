import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import foto from './fotka.jpg';

const ColorizedDiv = styled.div<{ blur: string }>`
  color: white;
  font-family: 'MoonLight-b', sans-serif;
  font-size: 1em;
  background: rgba(0, 0, 0, 0.1);
  height: 90vh;
  display: flex;
  align-items: top;
  justify-content: center;
  opacity: 1;
  backdrop-filter: ${(props) => props.blur};
  transition: backdrop-filter 0.2s steps(10);

  &.blurred {
    backdrop-filter: blur(30px);
  }
`;

const Aboutdiv = styled.div`
  display: flex;
  width: 100%;
`;

const TextDiv = styled.div`
  padding-left: 4vh;
  flex: 1.2;
  max-width: 66.666%;
  padding-right: 1em;
`;

const Photodiv = styled.div`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Fotka = styled.img`
border-radius:6px;
  margin: auto;
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: 60%;
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 4vh;
  padding-bottom: 10vh;
  font-family: 'Regular-el';
  font-size: 3em;
`;

const Text = styled.p`
  padding-top: 3vh;
  font-family: 'Regular-l', Helvetica, Arial, sans-serif;
  font-size: 1.em;
`;

const About: React.FC = () => {
  const [blur, setBlur] = useState('blur(4px)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setBlur(scrollPosition > 0.01 * maxScroll ? 'blur(30px)' : 'blur(4px)');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ColorizedDiv id="about" blur={blur} className={blur === 'blur(30px)' ? 'blurred' : ''}>
      <Aboutdiv>
        <TextDiv>
          <Title>WHO AM I ?</Title>
          <Text>
            Greetings! Let me introduce myself. I am an 18-year-old student from the city of Poprad in Slovakia. My interest in technology and computers began at a young age and has continued to fascinate me ever since. With great enthusiasm, I dedicate myself to programming and explore the endless possibilities that this field offers. It's been an exciting journey so far, and I am eager to share more about my endeavors and aspirations.
          </Text>
          <Text>
            From a young age, technology has been my playground. Today, I proudly wear the hat of a young programmer, navigating the dance between algorithms and creativity for a brighter, connected future. As a student on the brink of university, I'm thrilled about the adventures ahead. From web development to artificial intelligence, I aim to explore the vast realm of IT. But it's not all serious tech stuff! I believe humor is the secret sauce that makes life enjoyable. Join me on this journey, whether you're here for coding escapades, tech tips, or a good laugh.🤪
          </Text>
          <Text>
            Feel free to connect. I'm always up for a chat about the latest tech trends, programming adventures, or anything that sparks curiosity. Welcome aboard!
          </Text>
        </TextDiv>
        <Photodiv>
          <Fotka src={foto} alt="Me" />
        </Photodiv>
      </Aboutdiv>
    </ColorizedDiv>
  );
};

export default About;
