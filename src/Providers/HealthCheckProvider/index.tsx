import React from 'react';
import { useQuery } from 'react-query';
import { Loading } from '../../Components/Loading';
import { Modal } from '../../Components/Modal';
import { ModalBody } from '../../Components/Modal/ModalBody';
import { ModalContent } from '../../Components/Modal/ModalContent';
import { ModalFooter } from '../../Components/Modal/ModalFooter';
import { ModalHeader } from '../../Components/Modal/ModalHeader';
import { axiosInstance } from '../ReactQueryProvider';
import { Button } from './styles';

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

  return (
    <React.Fragment>
      <Modal isOpen={isError}>
        <ModalContent>
          <ModalHeader>
            <h1>Error!</h1>
          </ModalHeader>
          <ModalBody>
            <p>The server is not available right now. Try again later.</p>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={(): void => {
                refetch();
              }}
            >
              Retry
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {children}
    </React.Fragment>
  );
};
