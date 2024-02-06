import { motion } from "framer-motion";
import styled from "styled-components";
import "../styles.css";

const ColorizedDiv = styled.div`
  position: relative;
  color: white;
  height: 3400px;
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
  margin: 0; že
  padding-top: 3vh;
  font-family: "Regular-R";
  font-size: 2em;
  z-index: 1;

  @media (max-width: 900px) {
    align-self: center;
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

  flex: 0.3;
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
    font-size: 0.8em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Div2 = styled.div`
  justify-content: flex-start;
  align-items: center;
  flex: 6;
  background-color: transparent;
  flex-direction: column;
  display: flex;
  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
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
    font-size: 0.8em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Image = styled.img`
  margin-top:20px;
  object-fit: cover;
  border: 2px solid #363434;
  width: 135vh;
  height: 45vh;
  border-radius: 0px;

  @media (max-width: 900px) {
    width: 100%;
    height: 10%;
  }
`;
const Image1 = styled.img`
  margin-top:20px;
  object-fit: cover;
  border: 2px solid #363434;
  width: 30vh;
  border-radius: 0px;


  @media (max-width: 900px) {
    width: 100%;
    height: 5%;
  }
`;
const Image2 = styled.img`
  margin-top:20px;
  object-fit: fill;
  border: 2px solid #363434;
  width: 20vh;
  height:20vh;
  border-radius: 500px;

  @media (max-width: 900px) {
  width: 10vh;
  height:10vh;
  }
`;
const Imagediv = styled.div`
  display: flex;
  @media (max-width: 900px) {
    width: 100%;
    height:100%;
  
`;

const Div3 = styled.div`
  background-color: #155c35;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  width:80%;
  font-family: "Regular-R";
  padding-top: 5vh;
  font-size: 1em;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 10px; /* Adjust the font size as needed for smaller screens */
  }
`;
const Text1 = styled.h1`
  width: 80%;
  font-family: "Regular-R";
  padding-top: 5vh;
  font-size: 1em;
  z-index: 1;

  @media (max-width: 900px) {
    align-self: center;
    font-size: 10px;
  }
`;

const Platnetlogo = styled.img`
  width: 80%;
  y @media (max-width: 900px) {
    margin-left: 3vh;
    width: 10vh;
  }
`;

const HoverOverlay = styled.div`
  padding-right: 50px;
  padding-left: 50px;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* Added to align items in a column */
  cursor: pointer;

  transition: transform 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  @media (max-width: 900px) {
  
  width: 30%;
  height:2vh;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    padding:0px;
    margin:0px;
    width: 30%;
    }
  
  
`;

const ImageName = styled.p`
font-family: "Regular-R";
  color: white;
  font-size: 1.5em;
  text-align: center;
  margin: 0;
  z-index: 1;
  @media (max-width: 900px) {
    padding:0px;
    margin:0px;
    font-size: 1em;
    }
  

`;

const Imagedivv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 900px) {
  padding:0px;
  margin:0px;
   align-items: center;
    width: 100%;
    height: 10%;
    
  }
`;

const Aboutpage = () => {

  return (
    <>
      <ColorizedDiv id="aboutus">
        <Div1>
          <Logoloop></Logoloop>
          <Titleleaf>LeafLoop</Titleleaf>
        </Div1>

        <Div2>
        <Title>Tvoja AI Rastlinná Encyklopédia!</Title>
        <Text1>V LeafLoop veríme v úžasný svet rastlín a chceme vám pomôcť objavovať ho jednoduchým a interaktívnym spôsobom. Naša platforma je viac než len encyklopédia - je to komunita nadšencov, ktorí zdieľajú svoju vášeň pre rastliny.</Text1>
        <Image src="https://cdn.discordapp.com/attachments/1096191061015150754/1200639561819242606/LeafLoop.png?ex=65c6e9ba&is=65b474ba&hm=606eb5256c1e4db441e8d17c97618c3f44455a0fad876bc60ebcba49ec9b6447&"></Image>
        <Title2>Najväčšia knižnica na Slovensku? alebo aj na svete?</Title2>
        <Text>
      Ako je to možné, že máme tolko rastlín v našej databáze? Je to jednoduché, naša knižnica LeafLoop je  generovaná umelou inteligenciou. Momentálne pracujeme na vývoji vlastnej AI, ktorá bude ešte presnejšia a účinnejšia. Vzhľadom na dynamiku sveta rastlín sa môžu vyskytnúť chyby, no s vašou pomocou a spoluprácou našej komunity stále zdokonaľujeme naše služby.
      <br></br> <br></br> <strong>Ako to funguje? 🌱:</strong> <br></br>Jednoducho! Ak nenájdeš svoju rastlinu v našej databáze, máš možnosť ju pridať ty sám. Týmto jednoduchým krokom prispievaš k rozširovaniu našej encyklopédie a pomáhaš ostatným milovníkom rastlín objaviť nové druhy. <br></br> <br></br> A takto sme vytvorili      Najvačšiu knižnicu rastlín na SVETE!!!
        </Text>
        <Title2>Prečo LeafLoop:</Title2>
        <Text>
        <u>⚪Otvorená Databáza Rastlín:</u> LeafLoop ponúka prístup k otvorenej databáze rastlín pre každého. Sme presvedčení, že spolupráca a zdieľanie informácií vedie k obohacovaniu našej znalostnej bázy.
  <br></br><br></br>
  <u>⚪Interaktívny Chatbot:</u> Náš chatbot je tu pre vás, aby odpovedal na vaše otázky a poskytol vám rady ohľadom starostlivosti o rastliny.
  <br></br><br></br>
  <u>⚪Komunitná Spolupráca:</u> LeafLoop nie je len databáza, je to živá komunita. Každý príspevok a pridaná rastlina robia našu encyklopédiu ešte bohatšou. Naša komunita tvorí srdce LeafLoop. S vašou aktívnou účasťou a zdieľaním znalostí prispejete k neustálemu rozvoju našej platformy.
  <br></br><br></br>
  <u>⚪Open API:</u> Poskytujeme otvorené API, ktoré umožňuje vývojárom a nadšencom pristupovať k našej databáze rastlín a integrovať ju do vlastných projektov. Tým podporujeme otvorenosť a inovácie vo svete rastlín.
</Text>
<Image src="https://cdn.discordapp.com/attachments/1096191061015150754/1204145357542653993/LeafLoop_2.png?ex=65d3aac1&is=65c135c1&hm=82c5efb82b81d90e48170d277e548d5703a33c7d41be12a6fb48f1c13760d15e&"></Image>

          
          <Title2>Ako tento zelený projekt vznikol?</Title2>
 
          <Text1>
            "Chceš počuť príbeh o vzniku nášho zeleného projektu? Dovoľ mi, aby
            som ťa zaviedol späť na začiatok. Leafloop nevznikol len ako
            obyčajný projekt, ale bol výsledkom môjho osobného nadšenia. Som
            Michal Mucha, študent zo Slovenska, ktorý mal túžbu spojit moderné
            technológie, s niečím tak obyčajným ale pritom tak dôležitým a to s
            rastlinami. Mojou vášňou a oddanosťou pre spojenie moderných
            technológií s takýmto dôležitým aspektom života som začal projekt
            Leafloop. Spolu so svojím priateľom Palom sme starostlivo rozvíjali
            túto myšlienku, a dnes sme svedkami úspechu našej spoločnej
            inovácie, ktorá vznikla z nadšenia k fascinujúcemu svetu rastlín." -
            Michal Mucha
          </Text1>
          <Text>Kto stojí za vytvorením LeafLoopom? Chceš sa dozvediet viac o nás ?</Text>
          <Imagedivv>
  <HoverOverlay>
    <ImageContainer>
      <Image2
        src="https://michalfly.site/assets/images/fotka.jpg"
        alt="Michal Mucha"
        onClick={() => (window.location.href = "https://michalfly.site")}
      />
      <ImageName>Michal Mucha-Junior Developer</ImageName>
    </ImageContainer>
  </HoverOverlay>



</Imagedivv>
  <Title2>Naša Podpora:</Title2>
<Text1>
  Tento projekt si všimla renomovaná organizácia Pl@ntNet, ktorá sa zameriava na rozvoj a podporu iniciatív spojených s rastlinami. Ich entuziazmus pre náš projekt LeafLoop nás potešil, a preto sme hrdí, že sme získali ich podporu.
  <br></br><br></br>
  PlantNet rozpoznal potenciál nášho projektu a jeho prínos pre komunitu milovníkov rastlín. S ich podporou sme získali prístup k ich API na detekciu rastlín z fotky, čo umožňuje našim užívateľom ešte viac interakcie a pohodlia pri identifikácii rastlín prostredníctvom LeafLoop.
  <br></br><br></br>
  Chceme vyjadriť veľkú vďaku Pl@ntNetu za ich dôveru a podporu. Spoločne budeme pokračovať v rozvoji a poskytovaní kvalitných služieb pre všetkých milovníkov rastlín.
</Text1>
<Image1 src="https://www.digitalcitizen.life/wp-content/uploads/2020/10/plantnet.png"></Image1>
<Text>
<Title2>Pripojte sa na náš Discord server</Title2>
    <b></b>Chcete sa aktívne zapojiť do našej komunity a zdieľať svoju lásku k rastlinám? Pripojte sa k nášmu Discord serveru, kde môžete komunikovať s ostatnými nadšencami, získavať rady a zdieľať svoje skúsenosti!
  </Text>
  <a href="https://discord.gg/Sn3UvQBMef" className="discord-button">
    Pripojte sa na Discord
  </a>
        </Div2>
      </ColorizedDiv>
    </>
  );
};

export default Aboutpage;
