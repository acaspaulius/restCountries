import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const PaginationStyled = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const PageItemStyled = styled.li`
  margin: 0 5px;

  &.active .page_link {
    background-color: #90ff90;
    color: darkgreen;
    border-color: #90ff90;
  }

  &.disabled .page_link {
    color: grey;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const PageButtonStyled = styled.button`
  text-decoration: none;
  color: darkgreen;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  display: block;
  background-color: white;
`;
