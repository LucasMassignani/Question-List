import React from 'react';
import { Background, Box } from './styles';

export const Modal = ({
  children,
  isOpen,
}: {
  children: React.ReactElement;
  isOpen?: boolean;
}): React.ReactElement | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <Background>
      <Box>{children}</Box>
    </Background>
  );
};
