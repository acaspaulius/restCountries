import React, { useMemo } from 'react';
import PerPageSelector from '../PerPageSelector/PerPageSelector';
import { TPerPage } from '../../types';

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
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '16px', gap: '12px' }}>
      <nav className='pagination_container'>
        <ul className='pagination'>
          <li className={`page_item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button onClick={handlePreviousClick} className='page_link' disabled={currentPage === 1}>
              Previous
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className={`page_item ${number === currentPage ? 'active' : ''}`}>
              <button onClick={() => handlePageChange(number)} className='page_link'>
                {number}
              </button>
            </li>
          ))}
          <li className={`page_item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button onClick={handleNextClick} className='page_link' disabled={currentPage === totalPages}>
              Next
            </button>
          </li>
        </ul>
      </nav>
      <PerPageSelector itemsPerPage={itemsPerPage} onChange={(perPage) => paginate(1, perPage)} />
    </div>
  );
};

export default Pagination;
