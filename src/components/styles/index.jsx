import styled from '@emotion/styled';

export const Input = styled.input`
  min-width: 280px;
  &:focus,
  &:active {
    border-color: #85b7d9;
  }
`;

export const Select = styled.select`
  min-width: 280px;
  &:focus,
  &:active {
    border-color: #85b7d9;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 50px;
  width: 40rem;
  background: #fafafa;
  border: 1px solid #ccc;
  border-radius: 4px;
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
`;
