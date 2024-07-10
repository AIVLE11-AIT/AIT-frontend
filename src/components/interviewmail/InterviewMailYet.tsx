import React from 'react';
import * as I from './InterviewMailYet.style';
import { useNavigate } from 'react-router-dom';
import InterviewMailHeader from '../../pages/interviewmail/InterviewMailHeader';

function InterviewMailYet() {
  
  const navigate = useNavigate();
  function handleButtonClick() {
    navigate('/interview-mail');
  };

  return (
    <I.Container>
      <InterviewMailHeader />
      <I.Content>
        <I.MessageContainer>
          <I.ImageWrapper>📨</I.ImageWrapper>
          <I.Message>메일 전송을 완료해 주세요!</I.Message>
          <I.SubMessage>
            지원자들의 면접 결과를 보려면 지원자들이 면접을 완료해야 합니다.<br />
            지원자들이 면접을 볼 링크를 메일로 전송해 주세요!
          </I.SubMessage>
          <I.Button onClick={handleButtonClick}>메일 전송하기</I.Button>
        </I.MessageContainer>
      </I.Content>
    </I.Container>
  );
}

export default InterviewMailYet;
