import React from 'react';
import { ICountry } from '../../types';
import * as S from './CountryInfo.styled';

interface IProps extends ICountry {}

const CountryInfo: React.FC<IProps> = ({ name, region, area }) => {
  return (
    <S.CountryListItemStyled>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Region:</strong> {region}
      </p>
      <p>
        <strong>Area:</strong> {`${area} km²`}
      </p>
    </S.CountryListItemStyled>
  );
};

export default CountryInfo;
