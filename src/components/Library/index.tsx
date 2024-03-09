import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Pagination, Stack, useMediaQuery } from "@mui/material";
import PlantDetails from "./PlantDetails";
import { Link } from 'react-router-dom';
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
  padding-bottom: 3vh;
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
  border-radius:30px;
  border: 3px solid #363434;
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;


  transition: transform 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

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
const SearchInput = styled.input`
  font-family: 'Dosis', sans-serif;
  background: #424040; /* Vaša pôvodná farba */
  width: 500px;
  height: 50px;
  padding: 0 20px;
  border-radius: 20px;
  border: none;
  color: white;
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

  /* JavaScript efekt pre písmeno po písmene */
  animation: typing 0.8s steps(40, end);

  &:hover, &:focus {
    opacity: 1;
    transform: scale(1.08);
  }

  &:focus {
    outline: none;
  }
  @media (max-width: 900px) {
    width: 300px;
    height: 50px;
    font-size: 20px;
  }
`;
const MockupMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2ab96b;
  color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 999;
`;

interface PlantData {
  _id: string;
    špecifikácie: {
      taxonomické_meno: string;
      starostlivosť: string;
      popis: string;
      dar: string;
      naročnosť:string;
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
  url: string;
}

const Library: React.FC = () => {
  const [plantData, setPlantData] = useState<PlantData[]>([]);
  const [newPlantName, setNewPlantName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const plantsPerPage = isMobile ? 5 : 15;
  const [showMockup, setShowMockup] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleAddPlant = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.leafloop.wiki/addplant?nazovv=${newPlantName}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (response.status === 200) {
        const updatedResponse = await fetch(
          "https://api.leafloop.wiki/flowers",
        );
        const updatedData = await updatedResponse.json();

        if (updatedData && updatedData.length > 0) {
          setPlantData(updatedData);
        }

        console.log("Plant added successfully");
      } else {
        console.error("Failed to add plant:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding plant:", error);
    } finally {
      setLoading(false);
      setNewPlantName("");
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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const filteredPlantData = plantData.filter((plant) =>
    plant.špecifikácie.názov
      .toLowerCase()
      .includes(searchInput.toLowerCase()),
  );

  const paginatedFilteredPlantData = filteredPlantData.slice(
    (page - 1) * plantsPerPage,
    page * plantsPerPage,
  );

  return (
    <>
      <ColorizedDiv id="library">
        <Div1>
          <Logoloop />
          <Titleleaf>LeafLoop</Titleleaf>
        </Div1>

        <Div2>
          
          <Title>Vo vývoji</Title>
          <Title2>
          Vitaj v ríši rastlín, kde každá vetvička je knihou a každý list má
            svoj vlastný príbeh!
          </Title2>


          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <SearchInput
              type="text"
              placeholder="Hľadaj rastlinu"
              value={searchInput}
              onChange={(e) => {
                setPage(1)
                setSearchInput(e.target.value);
                setNewPlantName(e.target.value); // Add this line to update newPlantName
              }}
              
            />
          </div>
          <button onClick={handleAddPlant} disabled={loading}>
            add
          </button>

          <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "80%",
          }}
        >
        {paginatedFilteredPlantData.map((plant) => (
  <PlantInfoContainer key={plant._id}>
    {(() => {
      try {
        return (
          <Link to={`/plantdetails/${plant._id}`}>
            <PlantImage
              src={plant.url}
              alt={plant.špecifikácie.názov}
            />
          </Link>
        );
      } catch (error) {
        console.error(`Error loading image for plant ${plant._id}:`, error);
        return (
          <PlantImage
            src="path-to-placeholder-image.jpg"
            alt="Error loading image"
          />
        );
      }
    })()}
    <PlantName>{plant.špecifikácie.názov}</PlantName>
  </PlantInfoContainer>
))}
        </div>

          <Stack spacing={2} justifyContent="center" mt={3}>
            <Pagination
              count={Math.ceil(filteredPlantData.length / plantsPerPage)}
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
