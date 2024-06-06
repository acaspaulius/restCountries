import React from 'react';
import { TPerPage } from '../../types';
import * as S from './PerPageSelector.styled';

interface IProps {
  itemsPerPage: TPerPage;
  onChange: (itemsPerPage: TPerPage) => void;
}

const OPTIONS: TPerPage[] = [10, 25, 50, 100];

const PerPageSelector: React.FC<IProps> = ({ itemsPerPage, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(event.target.value) as TPerPage);
  };

  return (
    <S.Container>
      <S.Label htmlFor='per-page-select'>Items per page:</S.Label>
      <S.Select id='per-page-select' value={itemsPerPage} onChange={handleChange}>
        {OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default PerPageSelector;
