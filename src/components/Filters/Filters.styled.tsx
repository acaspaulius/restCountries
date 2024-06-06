import styled, { css } from 'styled-components';

export const FilterButtonsContainer = styled.div`
  margin: 0rem 1rem 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;
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
`;
