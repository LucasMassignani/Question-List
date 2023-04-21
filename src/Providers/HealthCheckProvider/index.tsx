import React from 'react';
import { useQuery } from 'react-query';
import { ButtonError } from '../../Components/Buttons';
import { Loading } from '../../Components/Loading';
import { Modal } from '../../Components/Modal';
import { ModalBody } from '../../Components/Modal/ModalBody';
import { ModalContent } from '../../Components/Modal/ModalContent';
import { ModalFooter } from '../../Components/Modal/ModalFooter';
import { ModalHeader } from '../../Components/Modal/ModalHeader';
import { axiosInstance } from '../ReactQueryProvider';

export const HealthCheckProvider = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  const { isLoading, isError, refetch } = useQuery({
    retry: false,
    staleTime: Infinity,
    queryFn: async () => {
      const response = await axiosInstance.get('/health');

      return response.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Modal isOpen>
        <ModalContent>
          <ModalHeader>
            <h1>Error!</h1>
          </ModalHeader>
          <ModalBody>
            <p>The server is not available right now. Try again later.</p>
          </ModalBody>
          <ModalFooter>
            <ButtonError
              onClick={(): void => {
                refetch();
              }}
            >
              Retry
            </ButtonError>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }

  return children;
};
