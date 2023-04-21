import React from 'react';
import { Spinning } from './Spinning';
import { Background } from './styles';

export const Loading = (): React.ReactElement => {
  return (
    <Background>
      <Spinning />
    </Background>
  );
};
