import React from 'react';
import { TPerPage } from '../../types';
import * as S from './PerPageSelector.styled';

interface IPerPageSelectorProps {
  itemsPerPage: TPerPage;
  onChange: (itemsPerPage: TPerPage) => void;
}

const PerPageSelector: React.FC<IPerPageSelectorProps> = ({ itemsPerPage, onChange }) => {
  const options: TPerPage[] = [10, 25, 50, 100];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(event.target.value) as TPerPage);
  };

  return (
    <S.Container className='per-page-selector'>
      <S.Label htmlFor='per-page-select'>Items per page:</S.Label>
      <S.Select id='per-page-select' value={itemsPerPage} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default PerPageSelector;
