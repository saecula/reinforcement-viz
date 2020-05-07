import React from 'react';
import { ModalContent, ModalWrapper } from '../styles';

const Modal = (props) => {
  return (
    <ModalWrapper>
      <ModalContent>{props.children}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
