import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.25rem 0.3rem;
  border-radius: 0.5rem;
  background-color: #8eff8f;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: darkgreen;
  margin-top: 1rem;

  &:hover {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

export const LoadingText = styled.span`
  margin-top: 1rem;
`;
