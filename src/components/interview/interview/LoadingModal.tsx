// LoadingModal.tsx
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const LoadingModal: React.FC = () => {
  return (
    <ModalOverlay>
      <ModalContent>
        <p>면접 영상을 전송 중입니다. 완료 화면이 나올 때까지 기다려 주세요.</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LoadingModal;
