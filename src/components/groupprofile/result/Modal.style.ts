import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 40px;
  max-width: 600px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 13.5px 0px rgba(0, 0, 0, 0.25);
  width: 568px;
  height: 246px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    padding: 20px;
    width: 90%;
    height: auto;
  }
`;

export const ModalTitle = styled.h2`
  margin-bottom: 10px;
  color: var(--black, #000);
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const ModalContent = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  color: gray;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 25px;
  right: 30px; 
  display: flex;
  gap: 15px;

  @media (max-width: 600px) {
    position: static;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
`;

export const CancelButton = styled.button`
  background: #D0D2D7;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 20px 8px 20px;
  border: 2px solid #D0D2D7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 5px 15px;
  }
`;

export const DeleteButton = styled.button`
  background: #404146;
  color: white;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 20px 8px 20px;
  border: 2px solid #404146;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 5px 15px;
  }
`;
