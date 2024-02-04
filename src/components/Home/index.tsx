import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "react-lottie";
import Leafani from "./animation.json";
import "../styles.css";
import Logo from "./logo.png";

const ColorizedDiv = styled.div`
  position: relative;
  color: white;
  height: 100vh;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden;
  background-color: #2ab96b; /* Change the background color here */
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Regular-R";
  font-size: 3.5em;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 2em; /* Adjust the font size as needed for smaller screens */
  }
`;

const StyledTypewriterWrapper = styled.div`
  padding-top: 3vh;
  padding-bottom: 4vh;
  font-family: "Regular-r";
  font-size: 1.3em;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 0.6em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Div1 = styled.div`
  justify-content: center;
  align-items: center;

  flex: 0.7;
  display: flex;
  flex-direction: row;
  background-color: transparent;
`;

const Titleleaf = styled.h1`
  margin-top: 2vh;
  margin-left: 2vh;
  justify-content: center;
  width: 90%;
  font-family: "Regular-R";
  font-size: 1.4em;

  @media (max-width: 900px) {
    margin-left: 3vh;
    font-size: 1em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Logoloop = styled.img`
  margin-top: 1vh;
  margin-left: 1vh;
  width: 8vh;
  border-radius: 20px;
`;

const Button = styled(motion.button)`
  margin: 1vh;
  width: 20vh;
  height: 5vh;
  font-family: "Regular-R";
  font-size: 1em;
  background-color: #2ab96b;
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: #2ab96b;
  }

  @media (max-width: 900px) {
    font-size: 0.8em;
  }
}`;

const Div2 = styled.div`
  justify-content: flex-start;
  align-items: center;
  flex: 6;
  background-color: transparent;
  flex-direction: row;
  display: flex;
  @media (max-width: 900px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Textdiv = styled.div`
  margin-left: 3vh;
  display: flex;
  width: 55%;
  flex-direction: column;

  @media (max-width: 900px) {
    margin-top: 3vh;
    width: 100%;
  }
`;

const Button2 = styled(motion.button)`
  margin: 1vh;
  width: 20vh;
  height: 5vh;
  font-family: "Regular-R";
  font-size: 1em;
  background-color: #18914a;
  color: black;
  border: 2px solid #18914a;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 900px) {
    font-size: 0.8em;
  }
`;

const Image = styled.img`
  object-fit: cover;
  border: 2px solid #363434;
  border-radius: 30px;
  width: 70vh;
  box-shadow: 30px -40px 10px rgba(21, 92, 53, 0.7);

  @media (max-width: 900px) {
    margin-left: 3vh;
    align-self: center;
    justify-self: center;
    width: 80%;
    height: 80%;
    box-shadow: 15px -20px 10px rgba(21, 92, 53, 0.7);
  }
`;

const Imagediv = styled.div`
  display: flex;
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

const Div3 = styled.div`
  background-color: #155c35;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  width: 80%;
  margin-bottom: 10vh;
  margin-left: 10vh;
  margin-right: 10vh;
  font-family: "Regular-R";
  font-size: 1em;
  z-index: 1;

  @media (max-width: 900px) {
    margin-left: 1vh;
    margin-bottom: 10vh;
    margin-right: 0vh;
    font-size: 0.6em;
  }
`;

const Text1 = styled.h1`
  justify-content: flex-start;
  font-family: "Regular-R";
  font-size: 1.4em;
  @media (max-width: 900px) {
    font-size: 0.6em;
  }
`;

const Platnetlogo = styled.img`
  width: 20vh;
  @media (max-width: 900px) {
    margin-bottom: 7vh;
    margin-right: 0vh;
    margin-left: 0vh;
    width: 15vh;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 900px) {
`;

const CounterText = styled(motion.h1)`
  font-family: "Regular-R";
  font-size: 1.5em;
  padding: 10px;
  @media (max-width: 900px) {
    font-size: 0.8em;
`;

const Homepage = () => {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        const response = await fetch("https://api.leafloop.wiki/flowers");
        const data = await response.json();
        if (data && data.length > 0) {
          setPlantData(data);
        }
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    };

    fetchPlantData();
  }, []);

  const handleExploreNowClick = () => {
    window.location.href = "/aboutpage";
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Leafani,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, plantData.length, { duration: 3 });

    return animation.stop;
  }, [plantData]);

  return (
    <>
      <ColorizedDiv id="homepage">
        <Div1>
          <Logoloop src={Logo}></Logoloop>
          <Titleleaf>LeafLoop</Titleleaf>
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleExploreNowClick}
          >
            Skúmať teraz
          </Button>
        </Div1>

        <Div2>
          <Textdiv>
            <Title>Personalizovaná</Title>
            <Title>pomoc s</Title>
            <Title>rastlinami</Title>
            <StyledTypewriterWrapper>
              <Typewriter
                cursor
                cursorStyle="_"
                words={[
                  "Personalizovaná pomoc pre vaše rastlinky",
                  "Vaše rastliny, naša personalizovaná odbornosť!",
                  "Najväčšia knižnica rastlín na Slovensku!",
                  "Použite naše LeafLoop-API dostupné pre každého",
                  "Opýtajte sa nášho AI-LeafLoop bota na rady pre vašu rastlinku",
                  "Zapojte sa a prispejte do našej open-source knižnice rastlín",
                ]}
                loop={true}
                typeSpeed={50}
                deleteSpeed={5}
                delaySpeed={5000}
              />
            </StyledTypewriterWrapper>
            <Button2
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleExploreNowClick}
            >
              Skúmať teraz
            </Button2>
            <CounterWrapper>
              <Text1>Už v máme v našej databáze:</Text1>
              <CounterText>{rounded}</CounterText>
              <Text1>rastlín 🍀</Text1>
            </CounterWrapper>
          </Textdiv>
          <Imagediv>
            <Image src="https://media.discordapp.net/attachments/882706828889296974/1200106454359736379/rastlina.jpg?ex=65c4f93b&is=65b2843b&hm=3e20e7ba54917f93baa21a246af053025b625b7c969604df6ac973d0628fef40&=&format=webp&width=1358&height=905" />
          </Imagediv>
        </Div2>
        <Div3>
          <Text>
            "Ponor sa do sveta rastlín s našou AI encyklopédiu rastlín a nechaj
            si poradit naším chatbotom. Odkryjte krásu přírody bez námahy!"
          </Text>
          <a href="https://identify.plantnet.org">
            <Platnetlogo src="https://my.plantnet.org/images/powered-by-plantnet-dark.png" />
          </a>
        </Div3>
      </ColorizedDiv>
      <Lottie options={defaultOptions} height={0} width={0} />
    </>
  );
};

export default Homepage;
