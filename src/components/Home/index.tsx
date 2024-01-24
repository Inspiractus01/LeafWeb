import React from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "../styles.css";

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


const Logo = styled(motion.img)`
  border-radius: 30px;
  width: 6vh;
  height: 6vh;
`;

const DarkGreenBackground = styled.div`
  border-radius: 30px;
  top: 13vh;
  right: 30vh;
  width: 1000vh;
  max-width: 70vh;
  height: 52.6vh;
  background-color: #163c24; /* Dark green color */
`;

const MainDiv = styled.div`
  color: green;
`;

const Div1 = styled.div`
  justify-content: center; /* Add this line to center content horizontally */
  align-items: center; /* Optionally, you can also center vertically */

  flex: 0.7;
  display: flex;
  flex-direction: row;
  background-color: transparent;
`;

const Titleleaf = styled.h1`
  margin-top: 4vh;
  margin-left: 6vh;
  justify-content: center;
  width: 90%;
  font-family: "Regular-R";
  font-size: 1.4em;

  @media (max-width: 900px) {
    margin-left: 3vh;
    font-size: 1em; /* Adjust the font size as needed for smaller screens */
  }
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
    font-size: 0.8em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Div2 = styled.div`
  justify-content: flex-start;
  align-items: center;
  flex: 6;
  background-color: transparent;
  flex-direction:row;
  display:flex;
  @media (max-width: 900px) {
    
    align-items: flex-start;
    flex-direction:column;
    
  }
`;

const Textdiv = styled.div`
  margin-left: 3vh;
  display: flex;
  width: 60%;
  flex-direction: column;

  @media (max-width: 900px) {
`;

const Image = styled.img`
  border-radius: 30px;
  width: 70vh;

  @media (max-width: 900px) {
    margin-left:3vh;
    align-self: center;
    justify-self:center;
    width: 80%;
    height:80%;
    
  }
`;
const Imagediv = styled.div`
  display: flex;
  @media (max-width: 900px) {
    width: 100%;
    height:100%;
    

`;


const Div3 = styled.div`
border-radius:30px;
background-color: #155C35;
  flex: 2;
`;
const Homepage = () => {
  const handleExploreNowClick = () => {
    window.location.href = "/aboutpage";
  };
  const handleExplorehome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <ColorizedDiv id="homepage">
        <Div1>
          <Titleleaf>LeafLoop</Titleleaf>
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleExploreNowClick}
          >
            Explore Now
          </Button>
        </Div1>

        <Div2>
          <Textdiv>
            <Title>Personalised</Title>
            <Title>help with</Title>
            <Title>plants</Title>
            <StyledTypewriterWrapper>
              <Typewriter
                cursor
                cursorStyle="_"
                words={[
                  "Personalized care advice for your plants!",
                  "Create a thriving green haven with tailored guidance!",
                  "Unlock custom tips for your unique plant companions!",
                  "Your plants, our personalized expertise!",
                  "Expert advice to enhance your plant parenting!",
                  "Tailored care tips for your beloved green friends!",
                  "Nurture your plants with personalized care insights!",
                  "Get bespoke advice for a flourishing plant life!",
                  "Elevate your plant care journey with personalized tips!",
                  "Your green companions deserve personalized attention!",
                ]}
                loop={true}
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={6000}
              />
            </StyledTypewriterWrapper>
            <Button
           
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleExploreNowClick}
          >
            Explore Now
          </Button>
          </Textdiv>
          <Imagediv>
          <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8dec094c-2586-4ea1-b34b-1a05132af117/ddui50i-3d1d706c-4ea9-4370-ae6a-13713d1847b3.jpg/v1/fill/w_1280,h_960,q_75,strp/pupava___dandelion_by_skofografista_ddui50i-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvOGRlYzA5NGMtMjU4Ni00ZWExLWIzNGItMWEwNTEzMmFmMTE3XC9kZHVpNTBpLTNkMWQ3MDZjLTRlYTktNDM3MC1hZTZhLTEzNzEzZDE4NDdiMy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oI_yuAFtXIVdF62Bwg2UwirGRXqYoMdTWwDJU4nRTno"  />
          </Imagediv>
       </Div2>

        <Div3>asd</Div3>
      </ColorizedDiv>
    </>
  );
};

export default Homepage;
