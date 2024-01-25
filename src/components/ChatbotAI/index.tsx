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

const Div1 = styled.div`
  justify-content: center; /* Add this line to center content horizontally */
  align-items: center; /* Optionally, you can also center vertically */

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
const Logoloop=styled.img`
margin-top:1vh;
margin-left: 1vh;
  width:8vh;
  border-radius:20px;
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
  width: 55%;
  flex-direction: column;

  @media (max-width: 900px) {
    margin-top:3vh;
    width:100%;

`;

const Button2 = styled(motion.button)`
  margin: 1vh;
  width: 20vh;
  height: 5vh;
  font-family: "Regular-R";
  font-size: 1em;
  background-color: #18914A;
  color: black;
  border: 2px solid #18914A;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 900px) {
    font-size: 0.8em; /* Adjust the font size as needed for smaller screens */
  }
`;


const Image = styled.img`
object-fit: cover; 
border: 2px solid #363434;
border-radius: 30px;
  width: 70vh;
  box-shadow: 30px -40px 10px rgba(21, 92, 53, 0.7); /* Add box-shadow for a subtle shadow effect */

  @media (max-width: 900px) {
    margin-left: 3vh;
    align-self: center;
    justify-self: center;
    width: 80%;
    height: 80%;
    box-shadow: 15px -20px 10px rgba(21, 92, 53, 0.7); /* Add box-shadow for a subtle shadow effect */
  }
`;
const Imagediv = styled.div`
  display: flex;
  @media (max-width: 900px) {
    width: 100%;
    height:100%;
  
`;


const Div3 = styled.div`
background-color: #155C35;
  flex: 2;
  display:flex;
  justify-content:center;
  align-items:center;
`;


const Text = styled.h1`
  margin-right:10vh;
  font-family: "Regular-R";
  font-size: 1em;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 0.4em; /* Adjust the font size as needed for smaller screens */
  }
`;
const Platnetlogo = styled.img`
  width: 20vh;
  @media (max-width: 900px) {
    margin-left: 3vh;
    width: 10vh;
  }
`;


const Chatbot = () => {
  const handleExploreNowClick = () => {
    window.location.href = "/aboutpage";
  };


  return (
    <>
      <ColorizedDiv id="homepage">
        <Div1>
          <Logoloop ></Logoloop>
          <Titleleaf>LeafLoop</Titleleaf>
        </Div1>

        <Div2>
          <Textdiv>
            <Title>COMMING SOON, IN DEVELOPEMENT</Title>

            <StyledTypewriterWrapper>
              <Typewriter
                cursor
                cursorStyle="_"
                words={[
                  "Comming Soon",
 ,
                ]}
                loop={true}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={4000}
              />
            </StyledTypewriterWrapper>

          </Textdiv>
          <Imagediv>
          
          </Imagediv>
       </Div2>

      </ColorizedDiv>
    </>
  );
};

export default Chatbot;
