import styled, { css } from 'styled-components';

export const FilterButtonsContainer = styled.div`
  margin: 0rem 1rem 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 600px) {
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 0;
    justify-content: center;
    width: 100%;
  }
`;

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.25rem 0.3rem;
  border-radius: 0.5rem;
  background-color: #8eff8f;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: darkgreen;
  flex: 1 1 auto;

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: darkgreen;
      color: white;
    `}

  @media (max-width: 600px) {
    flex: 1 1 100%; 
    padding: 0.5rem; 
    margin: 0.25rem 0; 
`;
