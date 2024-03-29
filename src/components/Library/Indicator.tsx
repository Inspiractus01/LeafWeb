import React from 'react';
import styled from 'styled-components';

const SquareContainer = styled.div`
  display: flex;
`;

const Square = styled.div<{ isActive: boolean }>`  
  border-radius:30px;
  width: 20px;
  height: 20px;
  margin-right: 5px; /* pridajte ľubovoľnú medzeru medzi štvorčekmi */
  background-color: ${({ isActive }) => isActive ? '#18914a' : '#E5E6F7'};
`;

interface IndicatorProps {
  value: number;
}

const Indicator: React.FC<IndicatorProps> = ({ value }) => {
  const squares = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <SquareContainer>
      {squares.map((_, index) => (
        <Square key={index} isActive={index < value} />
      ))}
    </SquareContainer>
  );
};

export default Indicator;
