import React, { useEffect, useState } from 'react';
import * as S from './Step5.style';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Step5() {
  let { groupId, interviewerId } = useParams();
  const navigate = useNavigate();
  const [interviewType, setInterviewType] = useState<string | null>(null);
  const [interviewerName, setInterviewerName] = useState<string | null>(null);

  useEffect(() => {
    const fetchInterviewData = async () => {
      try {
        const response = await axios.get(`/interviewGroup/readOne/${groupId}`);
        const data = response.data;
        setInterviewType(data.interviewType);
        
        const interviewerResponse = await axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}`);
        setInterviewerName(interviewerResponse.data.name);

        console.log('Interview Group Data:', data);
        console.log('Interviewer Data:', interviewerResponse.data);
      } catch (error) {
        console.error('Error fetching interview data:', error);
      }
    };

    fetchInterviewData();
  }, [groupId, interviewerId]);

  const onClickStartBtn = () => {
    navigate(`/interview/${groupId}/${interviewerId}`);
  };

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
      ) : (
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
      )}
    </div>
  );
}

export default Step5;
