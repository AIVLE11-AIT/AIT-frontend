import React, { useState } from 'react';
import GroupProfileHeader from '../header/GroupProfileHeader';
import { useNavigate } from 'react-router-dom';
import * as S from './Result.style';
import Modal from './Modal';

function Result() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();

  function handleCreateButtonClick() {
    navigate('/interviewpagemake');
  }

  return (
    <>
      <S.Container>
        <S.Box>
          <S.Title>케이티 24년 하반기 공채 1차 AI면접</S.Title>
          <S.Details>
            <S.DetailItem>
              <S.Icon size={16}>
                <img src={process.env.PUBLIC_URL + '/images/ResultIcon1.svg'} alt="Icon 1" />
              </S.Icon>
              2024년 1월 1일 - 2024년 1월 3일
            </S.DetailItem>
            <S.DetailItem>
              <S.Icon size={16}>
                <img src={process.env.PUBLIC_URL + '/images/ResultIcon2.svg'} alt="Icon 2" />
              </S.Icon>
              30분
            </S.DetailItem>
            <S.DetailItem>
              <S.Icon size={16}>
                <img src={process.env.PUBLIC_URL + '/images/ResultIcon3.svg'} alt="Icon 3" />
              </S.Icon>
              50명
            </S.DetailItem>
          </S.Details>
          <S.ButtonWrapper>
            <S.DeleteButton onClick={openModal}>삭제</S.DeleteButton>
            <S.EditButton onClick={handleCreateButtonClick}>수정</S.EditButton>
          </S.ButtonWrapper>
        </S.Box>
      </S.Container>
      {isModalOpen && <Modal closeModal={closeModal} />} {/* Modal 컴포넌트 */}
    </>
  );
}

export default Result;