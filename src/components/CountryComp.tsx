import React from 'react';
import { ICountry } from '../types/countries';

interface IProps extends ICountry {}

const CountryComp: React.FC<IProps> = ({ name, region, area }) => {
  return (
    <li className='country_list__item'>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Region:</strong> {region}
      </p>
      <p>
        <strong>Area:</strong> {`${area} km²`}
      </p>
    </li>
  );
};

export default CountryComp;
