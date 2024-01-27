import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SearchBar from "../components/searchbar";

const ColorizedDiv = styled.div`
  position: relative;
  color: white;
  height: 200vh;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: visible;
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
  justify-content: center;
  align-items: center;
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

const Text = styled.h1`
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

const PlantInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const PlantImage = styled.img`
  max-width: 300px;
  max-height: 300px;
`;

const PlantDescription = styled.p`
  font-family: "Regular-R";
  font-size: 10px;
  margin-top: 10px;
`;

interface PlantData {
  _id: string;
  name: string;
  description: string;
  care: string;
  taxname: string;
  carelevel: number;
  watering: number;
  light: number;
  url: string;
}

const Library: React.FC = () => {
  const [plantData, setPlantData] = useState<PlantData[]>([]);

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

  return (
    <>
      <ColorizedDiv id="library">
        <Div1>
          <Logoloop />
          <Titleleaf>LeafLoop</Titleleaf>
        </Div1>

        <Div2>
          <Title></Title>
          <Text></Text>
          <Title2>How this Green project Started?</Title2>
          <SearchBar />
          
          {plantData.map((plant) => (
            <PlantInfoContainer key={plant._id}>
              <PlantImage src={plant.url} alt={plant.name} />
              <PlantDescription>{plant.name}</PlantDescription>
            </PlantInfoContainer>
          ))}
          
          <Text1>"asdasdasdasd"</Text1>
        </Div2>
      </ColorizedDiv>
    </>
  );
};

export default Library;