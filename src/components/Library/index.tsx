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
    width: 500px;
    height:30px;
    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 20px;
    line-height: 10px;
    color: #575756;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 95% center;
    border-radius: 30px;
    border: 1px solid #575756;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    &::placeholder {
        color: rgba(87, 87, 86, 0.8);
        letter-spacing: 1.5px;
    }
    &:hover,
    &:focus {
        padding: 5px 0;
        outline: 0;
        border: 1px solid transparent;
        border-bottom: 1px solid #575756;
        border-radius: 0;
        background-position: 100% center;
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
  Slovenčina: {
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
    plant.Slovenčina.špecifikácie.názov
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
              alt={plant.Slovenčina.špecifikácie.názov}
            />
          </Link>
        );
      } catch (error) {
        console.error(`Error loading image for plant ${plant._id}:`, error);
        // Replace the following line with your placeholder image
        return (
          <PlantImage
            src="path-to-placeholder-image.jpg"
            alt="Error loading image"
          />
        );
      }
    })()}
    <PlantName>{plant.Slovenčina.špecifikácie.názov}</PlantName>
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
