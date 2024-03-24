import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Lottie from "react-lottie";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../styles.css";
import Indicator from './Indicator';
import Leafani from "./loading.json";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
interface PlantDetailsProps {}

interface PlantData {
  _id: string;
    špecifikácie: {
      taxonomické_meno: string;
      starostlivosť: string;
      popis: string;
      dar: string;
      názov: string;
      výška: string;
      naročnost?: string ; // Change to accept string or number
      náročnost?: string ; // Add the alternative key
      spôsob_rastu: string;
      trvanie: string;
      rast: {
        svetlo: string;
        atmosférická_vlhkosť: string; // Zmena na číslo
        ph: string;
        teplota: string;
        pôda: {
          vlhkosť: string;
          pôdne_živiny: string;
          slanosť_pôdy: string;
          textúra_pôdy: string;
        };
      };
    };
  url: string;
}

const ColorizedDiv = styled.div`
  position: relative;
  color: white;
  height: 1400px;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden;
  background-color: #2ab96b;
  flex-direction: column;


`;

const StyledTypewriterWrapper = styled.div`
  padding-top: 3vh;
  padding-bottom: 4vh;
  font-family: "Regular-r";
  font-size: 1.3em;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 0.6em;
  }
`;

const Div1 = styled.div`
  justify-content: center;
  align-items: center;
  flex: 0.4;
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
    font-size: 1em;
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
  width: 20%;
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
`;
const Buttonreport = styled(motion.button)`
  margin: 1vh;
  width: 20%;
  height: 3vh;
  font-family: "Regular-R";
  font-size: 1em;
  background-color: #FF4747;
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: #FF4747;
  }

  @media (max-width: 900px) {
    font-size: 0.8em;
  }
`;

const Div2 = styled.div`
  justify-content: flex-start;
  align-items: center;
  flex: 6;
  background-color: transparent;
  flex-direction: row;
  display: flex;
  height: 100px;

  @media (max-width: 900px) {
    align-items: flex-start;
    flex-direction: column;
    overflow-y:auto;
    padding-bottom:60px;
  }

  height: 100%;
`;

const Textdiv = styled.div`
  margin-left: 3vh;
  display: flex;
  width: 55%;
  flex-direction: column;

  @media (max-width: 900px) {
    margin-top:3vh;
    width:100%;
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
  align-items: flex-start;
  justify-content: flex-start;
  width: 480px;
  height: 480px;
  object-fit: cover;

  @media (max-width: 900px) {
      width:300px;
   height: 300px;
  }

`;

const Imagediv = styled.div`
  display: flex;

  @media (max-width: 900px) {
    width: 100%;
    height:100%;
  }
`;

const Title = styled.h1`
  width:100%
  display:flex;
  margin: 0;
  padding: 0;
  font-family: "Regular-R";
  font-size: 3em;

  @media (max-width: 900px) {
    font-size: 2em;
  }
`;

const Text = styled.h1`
color:#2ab96b;
justify-content:center;
align-self:center;
  margin: 0px;
  padding: 0px;
  font-family: "Regular-R";
  font-size: 1.5em;
  z-index: 1;

  @media (max-width: 900px) {
     font-size: 1em;
  }
`;

const Textpopis = styled.h1`
  margin: 5px;
  padding: 0px;
  font-family: "Regular-R";
  font-size: 0.8em;
  opacity: 0.6;

  @media (max-width: 900px) {
    font-size: 0.4em;
  }
`;

const Textsmaller = styled.h1`
  margin: 0px;
  padding-bottom: 10px;
  font-family: "Regular-R";
  font-size: 0.9em;

  @media (max-width: 900px) {
    font-size: 0.7em;
  }
`;
const Textsmallerpopis = styled.h1`
color:#2ab96b;
  margin: 0px;
  padding: 0px;
  font-family: "Regular-L";
  font-size: 1.3em;

  @media (max-width: 900px) {
    font-size: 0.8em;
  }
`;


const Div4 = styled.div`
  flex-direction: column;
  background-color: transparent;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-width: 100%;

  @media (max-width: 900px) {
    padding-bottom:20px;
  }
`;

const Title2 = styled.h1`
  align-self: center;
  width:100%
  display:flex;
  margin: 0;
  padding: 0;
  font-family: "Regular-R";
  font-size: 3em;

  @media (max-width: 900px) {
    font-size: 2em;
  }
`;

const Div3 = styled.div`
padding-left:10px;
  flex-direction: column;
  background-color: #424040;
  flex: 2;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
`;

const Text2 = styled.h1`
  margin: 0px;
  padding: 0px;
  font-family: "Regular-R";
  font-size: 1em;
  z-index: 1;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 900px) {
    font-size: 0.4em;
  }
`;

const Textpopis2 = styled.h1`
  margin: 5px;
  padding: 0px;
  font-family: "Regular-R";
  font-size: 0.8em;
  color:#424040;
  opacity: 2;

  @media (max-width: 900px) {
    font-size: 0.8em;
  }
`;

const Textsmaller2 = styled.h1`
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 0px;
  font-family: "Regular-R";
  font-size: 0.8em;
  z-index: 1;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 0.7em;
  }
`;

const Title3 = styled.h1`
color:#2ab96b;
  align-self: center;
  width:100%
  display:flex;
  margin: 0;
  padding: 0;
  font-family: "Regular-R";
  font-size: 3em;

  @media (max-width: 900px) {
    font-size: 2em;
  }
`;

const Divinfo=styled.div`
flex-direction:column;
display:flex;
justify-content:center;
align-items:flex-start;
`;
const Divpaddingtext = styled.div`
padding-left:10px;
  display: flex;
`;

const Divider = styled.hr`
  width: 97%;
  margin: 10px auto;
  border: none;
  border-top: 1px solid #fff;
  opacity: 0.6;
`;

const Buttonback = styled(motion.button)`
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
`;
const Sinput = styled.input`
  font-family: 'Dosis', sans-serif;
  background: #424040; /* Vaša pôvodná farba */
  width: 600px;
  height: 200px;
  padding: 0 20px;
  border-radius: 20px;
  border: none;
  color: #E5E6F7;
  padding-left:30px;
  margin-top: 5px;
  margin-left: 5px;
  cursor: pointer;
  font-size: 1.6em;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.1);
    font-size: 0.8em;
  }


  @media (max-width: 900px) {
    width: 300px;
    height: 50px;
    font-size: 20px;
  }
`;
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Leafani,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const getDifficultyValue = (details: PlantData['špecifikácie']) => {
  // Pokúsi sa získať hodnotu pomocou klúča 'naročnosť'
  let difficultyValue = details.naročnosť;
  // Ak hodnota nie je definovaná alebo je neplatná, pokračujeme s klúčom 'náročnosť'
  if (!difficultyValue || isNaN(parseInt(difficultyValue))) {
    difficultyValue = details.náročnosť;
  }
  // Ak aj tak nemôžeme získať platnú hodnotu, vrátime undefined
  if (!difficultyValue || isNaN(parseInt(difficultyValue))) {
    return undefined;
  }
  // Inak vrátime parsovanú hodnotu
  return parseInt(difficultyValue);
};

const handleExploreNowClick = () => {
  window.location.href = "/library";
};
const PlantDetailsPage: React.FC<PlantDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [plantDetails, setPlantDetails] = useState<PlantData | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const response = await fetch(`https://api.leafloop.wiki/flowers`);
        const data = await response.json();
        const plant = data.find((plant: PlantData) => plant._id === id);
        setPlantDetails(plant);
      } catch (error) {
        console.error('Error fetching plant details:', error);
      }
    };

    fetchPlantDetails();
  }, [id]);

  if (!plantDetails) {
    return <ColorizedDiv>
    <Lottie options={defaultOptions} height={600} width={600} />
    </ColorizedDiv>;
  }
// <Indicator value={parseInt(plantDetails.špecifikácie.rast.atmosférická_vlhkosť)} />
  return (
    <ColorizedDiv id="plantdetails">
      <Div1>
        <Logoloop></Logoloop>
        <Titleleaf>LeafLoop</Titleleaf>
        
        <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleExploreNowClick}
          >Späť</Button>



      </Div1>

      <Div2>
        <Div4>
          
          <Image src={plantDetails.url}></Image>
          
          <Title2>{plantDetails.špecifikácie.názov}</Title2>
          <Text2>({plantDetails.špecifikácie.taxonomické_meno})</Text2>
          <Textpopis2>Čelaď:</Textpopis2>
          <Textsmaller2>{plantDetails.špecifikácie.čelaď}</Textsmaller2>
          <Textpopis2>Popis:</Textpopis2>
          <Textsmaller2>{plantDetails.špecifikácie.popis}</Textsmaller2>
          <Textpopis2>Náročnosť:</Textpopis2>
          <Indicator value={getDifficultyValue(plantDetails.špecifikácie)} />
          <Textpopis2>Svetlo:</Textpopis2>
          <Indicator value={parseInt(plantDetails.špecifikácie.rast.svetlo)} />
          <Textpopis2>Atmosfericka vlhkosť:</Textpopis2>
          <Indicator value={parseInt(plantDetails.špecifikácie.rast.atmosférická_vlhkosť)} />
          <Textpopis2>Vlhkosť pôdy:</Textpopis2>
          <Indicator value={parseInt(plantDetails.špecifikácie.rast.pôda.vlhkosť)} />

          <Textsmaller><br></br> <br></br>Narazil/a si na chybu? Neboj sa, pomôž nám ju napraviť!🛠️ </Textsmaller>

          <Buttonreport
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOpenModal}
          >Nahlásiť</Buttonreport>
        </Div4>

        <Modal
  open={openModal}
  onClose={handleCloseModal}
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <Box
    sx={{
      backgroundColor: '#2ab96b',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      height: '600px',
      width: '800px',
      textAlign: 'center', // Center align text
      justifyContent: 'center', // Justify content to center
    }}
  >
    <Title>Nahlásenie chyby v údajoch 🛠️ </Title>
    <Text2><br></br><br></br><br></br>Všetci vieme, že dokonalosť neexistuje, ale práve ty môžeš prispieť k zlepšeniu našej platformy! Ak si všimol/a niečo, čo by sme mali opraviť alebo vylepšiť, neváhaj nám to oznámiť. Sme vďační za každú spätnú väzbu, ktorá nám pomôže posunúť sa vpred.
</Text2>
<Text2><br></br>Prosím, opíš chybu alebo problém čo najpodrobnejšie, aby sme si s ním vedeli poradiť. Čím viac informácií nám poskytneš, tým rýchlejšie budeme schopní nájsť a opraviť príčinu. Vďaka tvojej účasti môžeme našu službu ešte viac zlepšiť pre všetkých našich používateľov.
<br></br><br></br>Ďakujeme ti za spoluprácu a za to, že si súčasťou našej komunity!</Text2>
    <Sinput
        type="text"
        placeholder="Popíš chybu ktorú si našiel"
        onChange={(e) => {
        }}
      ></Sinput>
    <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCloseModal}
          >Nahlásiť chybu</Button>

  </Box>
</Modal>

        <Div3>
          <Title3>O rastline:</Title3>
          <Divider />

          <Text>Špecifikácie</Text>
          <Divider />

          <Divinfo>
            <Textsmallerpopis>Starostlivosť:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.starostlivosť}</Textsmaller>
          </Divinfo>


          <Divinfo>
            <Textsmallerpopis>Výnimočnosť:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.dar}</Textsmaller>
          </Divinfo>



          <Divinfo>
            <Textsmallerpopis>Výška:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.výška}</Textsmaller>
          </Divinfo>



          <Divinfo>
            <Textsmallerpopis>Trvanie:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.trvanie}</Textsmaller>
          </Divinfo>
          <Divider />

          <Text>Rast:</Text>
          <Divider />

          <Divinfo>
            <Textsmallerpopis>Spôsob rastu:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.spôsob_rastu}</Textsmaller>
          </Divinfo>
          <Divinfo>
            <Textsmallerpopis>Náročnosť:</Textsmallerpopis>
            <Textsmaller>{getDifficultyValue(plantDetails.špecifikácie)}</Textsmaller>
          </Divinfo>
          <Divinfo>
            <Textsmallerpopis>Svetlo:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.rast.svetlo}</Textsmaller>
          </Divinfo>

          <Divinfo>
            <Textsmallerpopis>Atmosferická vlhkosť:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.rast.atmosférická_vlhkosť}</Textsmaller>
           
          </Divinfo>

          <Divinfo>
            <Textsmallerpopis>pH:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.rast.ph}</Textsmaller>
          </Divinfo>

          <Divinfo>
            <Textsmallerpopis>Teplota:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.rast.teplota}</Textsmaller>
          </Divinfo>
         
          <Divider />
          <Text>Pôda:</Text>
          <Divider />
          
          <Divinfo>
            <Textsmallerpopis>Vlhkosť pôdy:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.rast.pôda.vlhkosť}</Textsmaller>
          </Divinfo>

          <Divinfo>
            <Textsmallerpopis>Pôdne živiny:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.rast.pôda.pôdne_živiny}</Textsmaller>
          </Divinfo>

          <Divinfo>
            <Textsmallerpopis>Slanosť pôdy:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.rast.pôda.slanosť_pôdy}</Textsmaller>
          </Divinfo>

          <Divinfo>
            <Textsmallerpopis>Textúra pôdy:</Textsmallerpopis>
            <Textsmaller>{plantDetails.špecifikácie.rast.pôda.textúra_pôdy}</Textsmaller>
          </Divinfo>
        </Div3>
      </Div2>
    </ColorizedDiv>
  );
};

export default PlantDetailsPage;
