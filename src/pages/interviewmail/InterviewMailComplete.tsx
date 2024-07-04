import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as I from './InterviewMailComplete.style';

function InterviewMailComplete() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/result'); // 면접 페이지 경로로 이동
  };

  return (
    <I.Container>
      <I.Message>메일 전송이 완료되었습니다!</I.Message>
      <I.SubMessage>
        면접 기간이 지난 후 지원자들의 면접 분석 결과를 확인할 수 있습니다.
      </I.SubMessage>
      <I.ImageWrapper>
        <img src="/images/InterviewMailCompleteIcon1.svg" alt="메일 전송 이미지 1" />
        <img src="/images/InterviewMailCompleteIcon2.svg" alt="메일 전송 이미지 2" />
        <img src="/images/InterviewMailCompleteIcon3.svg" alt="메일 전송 이미지 3" />
      </I.ImageWrapper>
      <I.Button onClick={handleButtonClick}>면접 페이지 이동하기</I.Button>
    </I.Container>
  );
}

export default InterviewMailComplete;
