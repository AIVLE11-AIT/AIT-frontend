import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.style';
import axios from 'axios';

interface ModalProps {
  closeModal: () => void;
}

function Modal({ closeModal }: ModalProps) {

  // 삭제 버튼 클릭 시
  function handleCreateButtonClick() {
    axios({
      url: `/interviewGroup/${2}/delete`,
      method: 'delete',
      headers: {
        Authorization: sessionStorage.getItem('isLogin'),
      },
    }).then((response) => {
      console.log(response);
        window.location.reload();
    }).catch((error) => {
      console.error('AxiosError:', error);
    });
  }

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.ModalTitle>
          [케이티 24년 하반기 공채 1차 AI면접]
          <br />
          페이지를 삭제하시겠습니까?</S.ModalTitle>
        <S.ModalContent>
          면접 페이지 삭제 시 복구가 불가합니다.
          <br />
          정말 삭제하시겠습니까?
        </S.ModalContent>
        <S.ButtonWrapper>
          <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
          <S.DeleteButton onClick={handleCreateButtonClick}>삭제</S.DeleteButton>
        </S.ButtonWrapper>
      </S.ModalContainer>
    </S.Overlay>
  );
}

export default Modal;
