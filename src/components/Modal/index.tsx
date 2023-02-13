import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type PropsType = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

const PeopleModal = ({ children, isOpen, onClose }: PropsType) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent padding={8}>{children}</ModalContent>
    </Modal>
  );
};

export default PeopleModal;
