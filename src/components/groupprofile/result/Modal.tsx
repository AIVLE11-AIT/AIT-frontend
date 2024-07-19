import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Modal.style';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { GroupIdAtom, GroupNameAtom } from '../../../recoil/groupProfileAtoms';

interface ModalProps {
  closeModal: () => void;
}

function Modal({ closeModal }: ModalProps) {

  const groupId = useRecoilValue(GroupIdAtom);
  const groupName = useRecoilValue(GroupNameAtom);

  // 삭제 버튼 클릭 시
  function handleCreateButtonClick() {
    axios({
      url: `/interviewGroup/${groupId}/delete`,
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
          {groupName}
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
