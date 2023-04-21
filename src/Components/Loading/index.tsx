import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Background, Rotate } from './styles';

export const Loading = (): React.ReactElement => {
  return (
    <Background>
      <Rotate>
        <AiOutlineLoading3Quarters
          size={70}
          color="#ffffff"
        />
      </Rotate>
    </Background>
  );
};
