import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const Toggable = ({ children, addLink }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const create = () => {
    addLink();
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} width="200px" colorScheme="purple">
        Create
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background="gray.800">
          <ModalHeader>Create link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blackAlpha" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={create} colorScheme="purple">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
