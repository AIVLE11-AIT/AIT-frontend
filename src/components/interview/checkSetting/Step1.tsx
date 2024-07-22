import React, { useEffect, useState } from 'react';
import * as S from './Step1.style';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Step1() {
  const { groupId } = useParams();
  //const [interviewType, setInterviewType] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [interviewType, setInterviewType] = useState<string>('kor'); // 기본값을 'kor'으로 설정

  useEffect(() => {
    const fetchInterviewData = async () => {
      try {
        const response = await axios.get(`/interviewGroup/readOne/${groupId}`);
        const data = response.data;
        //setInterviewType(response.data.language);

        //setInterviewType(response.data.interviewType);
        setStartTime(response.data.start_date);
        setEndTime(response.data.end_date);
        setInterviewType(data.language); // 데이터가 'eng'일 경우 업데이트
      } catch (error) {
        console.error('Error fetching interview data:', error);
      }
    };

    fetchInterviewData();
  }, [groupId]);

  return (
    <div>
      {interviewType === 'kor' ? (
        <div>
          <S.StepHeader>안내 사항</S.StepHeader>
          <S.StepMain>
            <S.Step1Container border="#FF4A4A">
              <S.NoticeText position="none">본 면접은 중간에 멈췄다가 이어서 진행이 불가능합니다.</S.NoticeText>
            </S.Step1Container>

            <S.WrapContainer>
              <S.Step1Wrap border="#868f9d">
                <S.Step1Info1>면접 시간</S.Step1Info1>
                <S.Step1Info2>10분</S.Step1Info2>
              </S.Step1Wrap>
              <S.Step1Wrap border="#868f9d">
                <S.Step1Info1>면접 질문</S.Step1Info1>
                <S.Step1Info2>총 6 문항</S.Step1Info2>
              </S.Step1Wrap>
            </S.WrapContainer>
            <S.Step1Container border="#696CEA">
              <S.NoticeText position='30px'>아래 안내를 확인해 주세요.</S.NoticeText>
              <S.Step1Info3>• 면접에 응시하기 위해서는 웹캠, 마이크, 원활한 인터넷 환경이 필요합니다.</S.Step1Info3>
              <S.Step1Info3>• 본 면접은 총 10분간 진행됩니다.</S.Step1Info3>
              <S.Step1Info3>• 면접 질문이 주어지고 20초 후 답변하시면 됩니다.</S.Step1Info3>
              <S.Step1Info3>• 한 질문에 대한 답변은 1분 동안 가능합니다.</S.Step1Info3>
              <S.Step1Info3>• 맨 마지막 [면접 종료하기] 버튼까지 눌러야 면접이 정상적으로 완료됩니다.</S.Step1Info3>
            </S.Step1Container>
          </S.StepMain>
        </div>
      ) : (
        <div>
          <S.StepHeader>Instructions</S.StepHeader>
          <S.StepMain>
            <S.Step1Container border="#FF4A4A">
              <S.NoticeText position="none">This interview cannot be paused and resumed.</S.NoticeText>
            </S.Step1Container>
            <S.WrapContainer>
              <S.Step1Wrap border="#868f9d">
                <S.Step1Info1>Interview Time</S.Step1Info1>
                <S.Step1Info2>10 minutes</S.Step1Info2>
              </S.Step1Wrap>
              <S.Step1Wrap border="#868f9d">
                <S.Step1Info1>Interview Questions</S.Step1Info1>
                <S.Step1Info2>Total 6 questions</S.Step1Info2>
              </S.Step1Wrap>
            </S.WrapContainer>

            <S.Step1Container border="#696CEA">
              <S.NoticeText position='30px'>Please check the instructions below.</S.NoticeText>
              <S.Step1Info3>• You need a webcam, microphone, and a stable internet connection to take the interview.</S.Step1Info3>
              <S.Step1Info3>• This interview will last for a total of 10 minutes.</S.Step1Info3>
              <S.Step1Info3>• You will be given a question and you should answer it after 20 seconds.</S.Step1Info3>
              <S.Step1Info3>• You have 1 minute to answer each question.</S.Step1Info3>
              <S.Step1Info3>• The interview will be completed only after you press the [End Interview] button at the end.</S.Step1Info3>
            </S.Step1Container>
          </S.StepMain>
        </div>
      )}
    </div>
  );
}

export default Step1;
