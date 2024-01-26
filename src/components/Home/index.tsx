import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
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
  width:80%;
  margin-bottom:10vh;
  margin-left:10vh;
  margin-right:10vh;
  font-family: "Regular-R";
  font-size: 1em;
  z-index: 1;

  @media (max-width: 900px) {
    margin-left:1vh;
    margin-bottom:10vh;
    margin-right:0vh;
    font-size: 0.6em; /* Adjust the font size as needed for smaller screens */
  }
`;
const Platnetlogo = styled.img`
  
  width: 20vh;
  @media (max-width: 900px) {
margin-bottom:7vh;
    margin-right:0vh;
    margin-left: 0vh;
    width: 15vh;
  }
`;


const Homepage = () => {
  const handleExploreNowClick = () => {
    window.location.href = "/aboutpage";
  };


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
                deleteSpeed={5}
                delaySpeed={4000}
              />
            </StyledTypewriterWrapper>
            <Button2       
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleExploreNowClick}
          >
            Explore Now
          </Button2>
          </Textdiv>
          <Imagediv>
          <Image src="https://media.discordapp.net/attachments/882706828889296974/1200106454359736379/rastlina.jpg?ex=65c4f93b&is=65b2843b&hm=3e20e7ba54917f93baa21a246af053025b625b7c969604df6ac973d0628fef40&=&format=webp&width=1358&height=905"  />
          </Imagediv>
       </Div2>
        <Div3>
       <Text>
"Dive into the green universe with our AI plant encyclopedia and let our charming flower chatbot be your guide. Unearth the beauty of nature effortlessly!"</Text>
<a href="https://identify.plantnet.org">
<Platnetlogo src="https://my.plantnet.org/images/powered-by-plantnet-dark.png"  />
</a>
        </Div3>
      </ColorizedDiv>
    </>
  );
};

export default Homepage;
