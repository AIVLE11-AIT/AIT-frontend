import React, { useEffect, useState } from 'react';
import * as S from './Step5.style';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Step5() {
  let { groupId, interviewerId } = useParams();
  const navigate = useNavigate();
  const [interviewType, setInterviewType] = useState<string>('kor'); // 기본값을 'kor'으로 설정
  const [interviewerName, setInterviewerName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [groupInfoResponse, interviewerResponse] = await Promise.all([
          // 면접 정보
          axios.get(`/interviewGroup/readOne/${groupId}`),
          // 지원자 정보
          axios.get(`/interviewGroup/${groupId}/interviewer/readOne/${interviewerId}`),
        ]);

        console.log('데이터1', groupInfoResponse);
        console.log('데이터2', interviewerResponse);
        setInterviewType(groupInfoResponse.data.language); // 데이터가 'eng'일 경우 업데이트
        setInterviewerName(interviewerResponse.data.name);
      } catch (error) {
        console.error('AxiosError:', error);
        if (axios.isAxiosError(error)) {
          console.error('응답 데이터:', error.response?.data);
          console.error('상태 코드:', error.response?.status);
          console.error('헤더:', error.response?.headers);
        }
        setError('인터뷰어가 없어서 데이터를 불러오는 중 오류가 발생했습니다.');
      }
    };

    fetchData();
  }, [groupId, interviewerId]);

  const onClickStartBtn = () => {
    navigate(`/interview/${groupId}/${interviewerId}`);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {interviewType === 'kor' ? (
        <>
          <S.StepHeader>{interviewerName}님!<br />면접을 위한 환경 설정이 완료되었습니다.</S.StepHeader>
          <S.HeaderText>아래 내용을 확인한 후 시작 버튼을 눌러 면접을 진행해 주세요.</S.HeaderText>
          <S.StepMain>
            <S.ContentContainer>
              <S.ContentBox>
                <S.ContentIcon src={process.env.PUBLIC_URL + '/images/Forward.svg'}></S.ContentIcon>
                <S.ContentText color="#FF4A4A">면접이 시작되면<br />반드시 새로고침을 누르지 말아 주세요.</S.ContentText>
              </S.ContentBox>
              <S.ContentBox>
                <S.ContentIcon src={process.env.PUBLIC_URL + '/images/Warning.svg'}></S.ContentIcon>
                <S.ContentText color="#FFBC2A">장치 연결이 끊기면 응시를 진행할 수 없으니<br />연결이 끊기지 않도록 유의해 주세요.</S.ContentText>
              </S.ContentBox>
            </S.ContentContainer>
            <S.MainText>면접을 시작하지 않으려면 지금 창을 종료해 주세요!</S.MainText>
            <S.StartBtn onClick={onClickStartBtn}>시작</S.StartBtn>
          </S.StepMain>
        </>
      ) : interviewType === 'eng' ? (
        <>
          <S.StepHeader>{interviewerName},<br /> your environment settings for the interview are complete.</S.StepHeader>
          <S.HeaderText>Please check the instructions below and click the start button to begin the interview.</S.HeaderText>
          <S.StepMain>
            <S.ContentContainer>
              <S.ContentBox>
                <S.ContentIcon src={process.env.PUBLIC_URL + '/images/Forward.svg'}></S.ContentIcon>
                <S.ContentText color="#FF4A4A">Once the interview starts,<br />please do not refresh the page.</S.ContentText>
              </S.ContentBox>
              <S.ContentBox>
                <S.ContentIcon src={process.env.PUBLIC_URL + '/images/Warning.svg'}></S.ContentIcon>
                <S.ContentText color="#FFBC2A">If the connection is lost, you will not be able to proceed with the interview.<br />Please ensure that the connection is stable.</S.ContentText>
              </S.ContentBox>
            </S.ContentContainer>
            <S.MainText>If you do not wish to start the interview, please close the window now!</S.MainText>
            <S.StartBtn onClick={onClickStartBtn}>Start</S.StartBtn>
          </S.StepMain>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Step5;
