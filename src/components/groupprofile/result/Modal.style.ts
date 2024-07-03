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
  padding: 20px;
  max-width: 600px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 13.5px 0px rgba(0, 0, 0, 0.25);
  width: 568px;
  height: 246px;
  flex-shrink: 0;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 10px;
  color: var(--black, #000);
  text-align: center;
  font-family: "Abhaya Libre SemiBold";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: pre-line;
`;

export const ModalContent = styled.p`
  margin-top: 40px;
  margin-bottom: 20px;
  white-space: pre-line;
  color: var(--gray-02, #606060);
  font-family: "Abhaya Libre SemiBold";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px; 
  display: flex;
  gap: 10px;
`;

export const CancelButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 9px;
  background: #ccc;
  color: black;
  font-family: "Abhaya Libre SemiBold";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  }
`;

export const DeleteButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 9px;
  background: #696cea;
  color: white;
  font-family: "Abhaya Libre SemiBold";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
