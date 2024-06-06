import React from 'react';
import { BarLoader } from 'react-spinners';
import * as S from './Loader.styled';

interface IProps {
  customAction?: {
    heading: string;
    buttonText: string;
    onClick: () => void;
  };
}

const Loader: React.FC<IProps> = ({ customAction }) => {
  return (
    <S.LoaderContainer>
      {!customAction ? (
        <>
          <BarLoader loading />
          <S.LoadingText>Loading...</S.LoadingText>
        </>
      ) : (
        <>
          <span style={{ marginBottom: '12px' }}>{customAction.heading}</span>
          <S.Button onClick={customAction.onClick}>{customAction.buttonText}</S.Button>
        </>
      )}
    </S.LoaderContainer>
  );
};

export default Loader;
