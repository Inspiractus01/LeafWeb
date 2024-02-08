import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { motion } from "framer-motion";
import "../styles.css";

interface PlantDetailsProps {}

interface PlantData {
  _id: string;
  Slovenčina: {
    špecifikácie: {
      taxonomické_meno: string;
      starostlivosť: string;
      popis: string;
      dar: string;
      názov: string;
      výška: string;
      spôsob_rastu: string;
      trvanie: string;
      rast: {
        svetlo: string;
        atmosférická_vlhkosť: string;
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
  };
  url: string;
}

const ColorizedDiv = styled.div`
  position: relative;
  color: white;
  height: 1200px;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden;
  background-color: #2ab96b; /* Change the background color here */
  flex-direction: column;
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

  flex: 0.5;
  display: flex;
  flex-direction: row;
  background-color: blue;
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
  flex-direction: row;
  display: flex;
  height: 100px;

  @media (max-width: 900px) {
    align-items: flex-start;
    flex-direction: column;
  }

  height: 100%; /* Add this line to make sure Div2 takes up the full height */
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
  align-items: flex-start;
  justify-content: flex-start;
  width: 550px;
  height: 500px;
  object-fit: cover;

  @media (max-width: 900px) {
  }
`;
const Imagediv = styled.div`
  display: flex;
  @media (max-width: 900px) {
    width: 100%;
    height:100%;
  
`;

const Title = styled.h1`
  width:100%
  display:flex;
  margin: 0;
  padding: 0;
  font-family: "Regular-R";
  font-size: 3em;

  @media (max-width: 900px) {
    font-size: 2em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Text = styled.h1`
  margin: 0px;
  padding: 0px;
  font-family: "Regular-R";
  font-size: 1em;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 0.4em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Textpopis = styled.h1`
  margin: 5px;
  padding: 0px;
  font-family: "Regular-R";
  font-size: 0.8em;
  opacity: 0.6;

  @media (max-width: 900px) {
    font-size: 0.4em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Textsmaller = styled.h1`
  margin: 0px;
  padding: 0px;
  font-family: "Regular-R";
  font-size: 0.8em;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 0.4em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Div4 = styled.div`
  flex-direction: column; /* Corrected typo here */
  background-color: blue;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-width: 100%;
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
    font-size: 2em; /* Adjust the font size as needed for smaller screens */
  }
`;
//div o popise

//#155C35

const Div3 = styled.div`
  flex-direction: column; /* Corrected typo here */
  background-color: green;
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
    font-size: 0.4em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Textpopis2 = styled.h1`
  margin: 5px;
  padding: 0px;
  font-family: "Regular-R";
  font-size: 0.8em;
  opacity: 0.6;

  @media (max-width: 900px) {
    font-size: 0.4em; /* Adjust the font size as needed for smaller screens */
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
  text-align: center; /* Centrování textu */

  @media (max-width: 900px) {
    font-size: 0.4em; /* Adjust the font size as needed for smaller screens */
  }
`;

const Title3 = styled.h1`
  align-self: center;
  width:100%
  display:flex;
  margin: 0;
  padding: 0;
  font-family: "Regular-R";
  font-size: 3em;

  @media (max-width: 900px) {
    font-size: 2em; /* Adjust the font size as needed for smaller screens */
  }
`;
//Div kde su informacie ohladom rastlin, 
const Divinfo=styled.div`
display:flex;
justify-content:center;
align-items:center;
`;


const PlantDetailsPage: React.FC<PlantDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [plantDetails, setPlantDetails] = useState<PlantData | null>(null);

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
    return <div>Loading...</div>;
  }

  return (
    <ColorizedDiv id="plantdetails">
    <Div1>
      <Logoloop></Logoloop>
      <Titleleaf>LeafLoop</Titleleaf>
    </Div1>

    <Div2>
      <Div4>
        <Image src={plantDetails.url}></Image>
        <Title2>{plantDetails.Slovenčina.špecifikácie.názov}</Title2>
        <Text2>({plantDetails.Slovenčina.špecifikácie.taxonomické_meno})</Text2>
        <Textpopis2>Popis:</Textpopis2>
        <Textsmaller2>{plantDetails.Slovenčina.špecifikácie.popis}</Textsmaller2>
      </Div4>
      <Div3>
        <Title3>O rastline:</Title3>

        <Text>Špecifikácie</Text>
        
        
        <Divinfo>
        <Textsmaller>Výška:</Textsmaller>
        <Textsmaller>{plantDetails.Slovenčina.špecifikácie.výška}</Textsmaller>
        </Divinfo>
        <Divinfo>
        <Textsmaller>Spôsob rastu:</Textsmaller>
        
        </Divinfo>
       
        <Textsmaller>Trvanie:</Textsmaller>
        <Text>Rast:</Text>
        <Divinfo>
        <Textsmaller>Svetlo:</Textsmaller>
        <Textsmaller>{plantDetails.Slovenčina.špecifikácie.rast.svetlo}</Textsmaller>
        </Divinfo>
        <Divinfo>
        <Textsmaller>Atmosfericka vlhkosť:</Textsmaller>
        <Textsmaller>{plantDetails.Slovenčina.špecifikácie.rast.atmosférická_vlhkost}</Textsmaller>
        </Divinfo>
      </Div3>
    </Div2>
  </ColorizedDiv>
);
};


export default PlantDetailsPage;
