import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { motion,useScroll,useSpring } from "framer-motion";
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
const Title2 = styled.h1`
  margin: 0;
  padding-top: 2vh;
  font-family: "Regular-R";
  font-size: 2em;
  z-index: 1;

  @media (max-width: 900px) {
    align-self:center;
    font-size: 20px; /* Adjust the font size as needed for smaller screens */
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
  flex-direction:column;
  display:flex;
  @media (max-width: 900px) {
    
    align-items: center;
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
width:135vh;
height:45vh;
border-radius: 0px;

  @media (max-width: 900px) {
    width:100%;
    height:30%;

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
  font-family: "Regular-R";
  padding-top:5vh;
  font-size: 1em;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 10px; /* Adjust the font size as needed for smaller screens */
  }
`;
const Text1 = styled.h1`
width:80%;
  font-family: "Regular-R";
  padding-top:5vh;
  font-size: 1em;
  z-index: 1;

  @media (max-width: 900px) {
    align-self:center;
    font-size: 10px;
  }
`;

const Platnetlogo = styled.img`
width:80%;y
  @media (max-width: 900px) {
    margin-left: 3vh;
    width: 10vh;
  }
`;

const Aboutpage = () => {
  const handleExploreNowClick = () => {
    window.location.href = "/aboutpage";
  };


  return (
    <>
      <ColorizedDiv id="aboutus">
        <Div1>
          <Logoloop ></Logoloop>
          <Titleleaf>LeafLoop</Titleleaf>
        </Div1>

        <Div2>
            <Title>O nás</Title>
            <Text>Kto stojí za vytvorením LeafLoopom?</Text>
            <Image src="https://cdn.discordapp.com/attachments/1096191061015150754/1200639561819242606/LeafLoop.png?ex=65c6e9ba&is=65b474ba&hm=606eb5256c1e4db441e8d17c97618c3f44455a0fad876bc60ebcba49ec9b6447&"></Image>
            <Title2>Ako sa tento zelený projekt začal?</Title2>
            <Text1>"Chceš počuť príbeh o vzniku nášho zeleného projektu? Dovoľ mi, aby som ťa zaviedol späť na začiatok. Leafloop nevznikol len ako obyčajný projekt, ale bol výsledkom môjho osobného nadšenia.  Som Michal Mucha, študent zo Slovenska, ktorý mal túžbu spojit moderné technológie, s niečím tak obyčajným ale pritom tak dôležitým a to s rastlinami. Mojou vášňou a oddanosťou pre spojenie moderných technológií s takýmto dôležitým aspektom života som začal projekt Leafloop. Spolu so svojím priateľom Palom sme starostlivo rozvíjali túto myšlienku, a dnes sme svedkami úspechu našej spoločnej inovácie, ktorá vznikla z lásky k fascinujúcemu svetu rastlín."           
              - Michal</Text1>
       </Div2>

      </ColorizedDiv>
      <ColorizedDiv>\
     
      </ColorizedDiv>

    </>
  );
};

export default Aboutpage;
