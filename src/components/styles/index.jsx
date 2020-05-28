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
  // filter: blur(3px);  use elsewhere
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

export const ScenarioViewer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  height: 90%;
`;

export const OuterScenarioBox = styled.div`
  background: #ffffff !important;
  min-width: 40%;
  text-align: center;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  min-width: 0;
  min-height: 0;
  overflow: 'hidden';
`;

export const ScenarioBox = styled.div`
  padding: 10px;
  background: #ffffff !important;
  text-align: center;
  height: 100%;
`;
