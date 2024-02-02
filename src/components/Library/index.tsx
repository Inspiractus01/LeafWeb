import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Pagination, Stack, useMediaQuery } from "@mui/material";

const ColorizedDiv = styled.div`
  position: relative;
  color: white;
  height: 2000px;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: visible;
  background-color: #2ab96b;
  flex-direction: column;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Regular-R";
  font-size: 3.5em;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 2em;
  }
`;
const Title2 = styled.h1`
  margin: 0;
  padding-top: 2vh;
  font-family: "Regular-R";
  font-size: 1em;
  z-index: 1;

  @media (max-width: 900px) {
    align-self: center;
    font-size: 20px;
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
    font-size: 1em;
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
    font-size: 10px;
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
  margin: 20px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
const PlantImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    width: 250px;
    height: 150x;
  }
`;
const PlantName = styled.p`
  font-family: "Regular-R";
  font-size: 15px;
  margin-top: 10px;
`;

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

const Library: React.FC = () => {
  const [plantData, setPlantData] = useState<PlantData[]>([]);
  const [newPlantName, setNewPlantName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1); // Track the current page
  const isMobile = useMediaQuery('(max-width: 900px)');
  const plantsPerPage = isMobile ? 5 : 15; // Number of plants to display per page

  const handleAddPlant = async () => {
    try {
      setLoading(true);

      const response = await fetch(`https://api.leafloop.wiki/addplant?nazovv=${newPlantName}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.status === 200) {
        const updatedResponse = await fetch("https://api.leafloop.wiki/flowers");
        const updatedData = await updatedResponse.json();

        if (updatedData && updatedData.length > 0) {
          setPlantData(updatedData);
        }

        console.log('Plant added successfully');
      } else {
        console.error('Failed to add plant:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding plant:', error);
    } finally {
      setLoading(false);
      setNewPlantName('');
    }
  };

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

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const paginatedPlantData = plantData.slice((page - 1) * plantsPerPage, page * plantsPerPage);

  return (
    <>
      <ColorizedDiv id="library">
        <Div1>
          <Logoloop />
          <Titleleaf>LeafLoop</Titleleaf>
        </Div1>

        <Div2>
          <Title>Vo vývoji</Title>
          <Text></Text>
          <Title2>Vitaj v ríši rastlín, kde každá vetvička je knihou a každý list má svoj vlastný príbeh!</Title2>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Enter plant name"
              value={newPlantName}
              onChange={(e) => setNewPlantName(e.target.value)}
            />
          </div>
          <button onClick={handleAddPlant} disabled={loading}>add</button>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: "80%" }}>
            {paginatedPlantData.map((plant) => (
              <PlantInfoContainer key={plant._id}>
                <PlantImage src={plant.url} alt={plant.Slovenčina.špecifikácie.názov} />
                <PlantName>{plant.Slovenčina.špecifikácie.názov}</PlantName>
              </PlantInfoContainer>
            ))}
          </div>

          {/* Pagination */}
          <Stack spacing={2} justifyContent="center" mt={3}>
            <Pagination
              count={Math.ceil(plantData.length / plantsPerPage)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </Div2>
      </ColorizedDiv>
    </>
  );
};

export default Library;