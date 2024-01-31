import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons library

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2; /* Gray background color */
  padding: 10px;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 1.2em;
  margin-right: 8px;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon />
      asd
      <SearchInput type="text" placeholder="Search..." />
    </SearchBarContainer>
  );
};

export default SearchBar;
