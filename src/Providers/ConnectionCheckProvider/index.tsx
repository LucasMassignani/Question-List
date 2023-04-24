import React from 'react';
import { Modal } from '../../Components/Modal';
import { ModalBody } from '../../Components/Modal/ModalBody';
import { ModalContent } from '../../Components/Modal/ModalContent';
import { ModalHeader } from '../../Components/Modal/ModalHeader';
import { useConnection } from '../../Hooks/useNetwork';

export const ConnectionCheckProvider = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  const connection = useConnection();

  return (
    <React.Fragment>
      {!connection && (
        <Modal isOpen>
          <ModalContent>
            <ModalHeader>
              <h1>Connection Error!</h1>
            </ModalHeader>
            <ModalBody>
              <p>Connection lost. Please check your internet connection.</p>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      {children}
    </React.Fragment>
  );
};
