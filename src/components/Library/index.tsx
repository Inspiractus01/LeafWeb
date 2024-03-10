import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Pagination, Stack, useMediaQuery } from "@mui/material";
import PlantDetails from "./PlantDetails";
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Leafani from "./loading1.json";
import Lottie from "react-lottie";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Leafani,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

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
const Text2 = styled.h1`
  width: 100%;
  padding-top: 5vh;
  font-family: "Regular-R";
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

const Sinput = styled.input`
  font-family: 'Dosis', sans-serif;
  background: #424040; /* Vaša pôvodná farba */
  width: 500px;
  height: 50px;
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
const Boxx=styled(Box)`
display: flex,
alignItems: center,
justifyContent: center,
`;
const Button2 = styled(motion.button)`
margin: 1vh;
width: 20vh;
height: 4vh;
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
}`;

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
  const [addingPlant, setAddingPlant] = useState<boolean>(false); 
  const [openModal, setOpenModal] = useState(false); 


  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddPlant = async () => {
    try {
      setLoading(true);
      setAddingPlant(true);

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
      setAddingPlant(false);
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
          {paginatedFilteredPlantData.length === 0 && (
  <>
  <Title2>Vyzerá to tak, že tvoju rastlinu ešte nemáme v databáze...Chceš ju Pridať pomocou AI 🤔?
    </Title2>
      <Button2 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOpenModal}>
          Pridať novú rastlinu🌱
        </Button2>
        
        {/* Modálny dialóg */}
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
      height: '800px',
      width: '900px',
      textAlign: 'center', // Center align text
      justifyContent: 'center', // Justify content to center
    }}
  >
    <Title>Pridaj novú rastlinu!</Title>
    <Typography>
      <Text2>Všetci vieme, že nič nie je dokonalé, ale práve ty to môžeš napraviť!🤓</Text2>
      <Text2>Stačí napísať presný názov tvojej obľúbenej rastliny do políčka nižšie a kliknúť na tlačidlo "Pridaj". Pomôž nám rozšíriť túto úžasnú databázu rastlín a priniesť viac zelene do našej komunity! Ďakujeme ti za tvoju pomoc!</Text2>
      
      <Sinput
        type="text"
        placeholder="Správne napísaný názov rastliny"
        onChange={(e) => {
          setNewPlantName(e.target.value);
        }}
      ></Sinput>
      <Button2 onClick={handleAddPlant} disabled={loading}>
        Pridať
      </Button2>
    </Typography>
    {addingPlant ? (
        <div>
          <Lottie options={defaultOptions} height={300} width={300} />
          <Text2>Rastlina sa pridáva</Text2>
        </div>
      ) : null}
  </Box>
</Modal>

    

  </>
  
)}

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
