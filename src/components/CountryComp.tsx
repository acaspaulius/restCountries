import React from 'react';

type Country = {
  name: string;
  region: string;
  area: number;
};

const CountryComp: React.FC<Country> = ({ name, region, area }) => {
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
