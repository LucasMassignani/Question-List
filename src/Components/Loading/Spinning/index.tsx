import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Rotate } from './styles';

const defaultIconSize = 70;

export const Spinning = ({
  color = '#ffffff',
  size = defaultIconSize,
}: {
  color?: string;
  size?: number;
}): React.ReactElement => {
  return (
    <Rotate>
      <AiOutlineLoading3Quarters
        size={size}
        color={color}
      />
    </Rotate>
  );
};
