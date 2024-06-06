import React from 'react';
import PerPageSelector from '../PerPageSelector/PerPageSelector';
import { TPerPage } from '../../types';
import * as S from './Pagination.styled';

const DISPLAY_RANGE: number = 3;

interface IProps {
  itemsPerPage: TPerPage;
  totalItems: number;
  paginate: (pageNumber: number, perPage: TPerPage) => void;
  currentPage: number;
}

const Pagination: React.FC<IProps> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers: number[] = [];

  let startPage = Math.max(1, currentPage - Math.floor(DISPLAY_RANGE / 2));
  let endPage = Math.min(totalPages, startPage + DISPLAY_RANGE - 1);

  startPage = Math.max(1, Math.min(startPage, endPage - DISPLAY_RANGE + 1));

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePreviousClick = () => {
    return currentPage > 1 && paginate(currentPage - 1, itemsPerPage);
  };

  const handleNextClick = () => {
    return currentPage < totalPages && paginate(currentPage + 1, itemsPerPage);
  };

  const handlePageChange = (nextPage: number) => {
    paginate(nextPage, itemsPerPage);
  };

  return (
    <S.PaginationContainer>
      <S.PaginationStyled>
        <S.PageItemStyled className={`${currentPage === 1 ? 'disabled' : ''}`}>
          <S.PageButtonStyled onClick={handlePreviousClick} disabled={currentPage === 1}>
            Previous
          </S.PageButtonStyled>
        </S.PageItemStyled>
        {pageNumbers.map((number) => (
          <S.PageItemStyled key={number} className={`${number === currentPage ? 'active' : ''}`}>
            <S.PageButtonStyled onClick={() => handlePageChange(number)}>{number}</S.PageButtonStyled>
          </S.PageItemStyled>
        ))}
        <S.PageItemStyled className={`${currentPage === totalPages ? 'disabled' : ''}`}>
          <S.PageButtonStyled onClick={handleNextClick} disabled={currentPage === totalPages}>
            Next
          </S.PageButtonStyled>
        </S.PageItemStyled>
      </S.PaginationStyled>

      <PerPageSelector itemsPerPage={itemsPerPage} onChange={(perPage) => paginate(1, perPage)} />
    </S.PaginationContainer>
  );
};

export default Pagination;
