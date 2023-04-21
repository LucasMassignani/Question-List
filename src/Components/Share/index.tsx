import React from 'react';
import { useMutation } from 'react-query';
import { axiosInstance } from '../../Providers/ReactQueryProvider';
import { Button, ButtonGray, ButtonSecondary } from '../Buttons';
import { Spinning } from '../Loading/Spinning';
import { Modal } from '../Modal';
import { ModalBody } from '../Modal/ModalBody';
import { ModalContent } from '../Modal/ModalContent';
import { ModalFooter } from '../Modal/ModalFooter';
import { ModalHeader } from '../Modal/ModalHeader';
import { FooterContent, ShareContainer } from './styles';

export const Share = (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [email, setEmail] = React.useState('');

  const handleClose = (): void => {
    setIsOpen(false);
    setEmail('');
  };

  const mutation = useMutation(
    () => {
      return axiosInstance.post(
        '/share',
        {},
        {
          params: {
            destination_email: email,
            content_url: location.href,
          },
        },
      );
    },
    {
      onSuccess: () => {
        handleClose();
      },
    },
  );

  return (
    <React.Fragment>
      <ButtonSecondary
        onClick={(): void => {
          setIsOpen(true);
        }}
      >
        Share Screen
      </ButtonSecondary>

      <Modal isOpen={isOpen}>
        <ModalContent>
          <ModalHeader>
            <h1>Share Screen!</h1>
          </ModalHeader>
          <ModalBody>
            <ShareContainer>
              <p>Share this screen with someone!</p>

              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(event): void => {
                  setEmail(event.target.value);
                }}
              />
            </ShareContainer>
          </ModalBody>
          <ModalFooter>
            <FooterContent>
              <ButtonGray
                onClick={(): void => {
                  handleClose();
                }}
              >
                Close
              </ButtonGray>

              <Button
                onClick={(): void => {
                  mutation.mutate();
                }}
              >
                {mutation.isLoading ? (
                  <Spinning
                    color="#000000"
                    size={12}
                  />
                ) : (
                  'Submit'
                )}
              </Button>
            </FooterContent>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};
