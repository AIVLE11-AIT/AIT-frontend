import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as A from './AiResult.style';

interface InterviewerInfo {
  name: string;
  email: string;
}

interface Question {
  id: number;
  question: string;
  // 다른 필요한 필드를 여기에 추가합니다.
}

function AiResult() {
  let { groupId, interviewerId } = useParams();
  const [interviewerInfo, setInterviewerInfo] = useState<InterviewerInfo | null>(null); // 지원자 정보 저장 변수
  const [videoUrl, setVideoUrl] = useState<string | null>(null); // 자기소개 영상 저장 변수
  const [companyQna, setCompanyQna] = useState<Question[]>([]); // 질문 저장 변수
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchVideoData = async () => {
    try {
      const token = sessionStorage.getItem('isLogin') || '';

      const [introduceResponse, interviewerInfoResponse, companyQnaResponse] = await Promise.all([
        axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}/introduce/read`, {
          headers: { Authorization: token },
          responseType: 'blob',
        }),
        axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}`, {
          headers: { Authorization: token },
        }),
        axios.get(`/interviewGroup/${groupId}/companyQna/readAll`, {
          headers: { Authorization: token },
        }),
      ]);

      const videoBlob = new Blob([introduceResponse.data], { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoUrl); // 자기소개 영상 저장
      setInterviewerInfo(interviewerInfoResponse.data); // 지원자 정보 저장
      setCompanyQna(companyQnaResponse.data); // 공통질문 저장
      

    } catch (error) {
      console.error('AxiosError:', error);
    }
  };

  useEffect(() => {
    fetchVideoData();

    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [groupId, interviewerId]);

  function onClickBackBtn() {
    navigate(`/interviewer-list/${groupId}`)
  }

  return (
    <A.MainContainer>
      <A.Container>
        <A.InterviewerImage>
          <img src={process.env.PUBLIC_URL + '/images/Image.svg'} />
        </A.InterviewerImage>
        {interviewerInfo ? (
          <A.InterviewerInfo>
            <div>{interviewerInfo.name}</div>
            <A.Email>{interviewerInfo.email}</A.Email>
          </A.InterviewerInfo>
        ) : (
          <div>Loading interviewer info...</div>
        )}
        <A.BackBtn onClick={onClickBackBtn}>목록으로 이동</A.BackBtn>
      </A.Container>

      <A.InterviewResultContainer>
        <A.InterviewVideo>
          <div>
            {error ? (
              <div>{error}</div>
            ) : videoUrl ? (
              <video controls style={{ width: '500px', height: '300px' }}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <A.QuestionList>
            <A.QuestionTypeBox>
              <div>
                <A.QuestionTypeTitle>질문 리스트</A.QuestionTypeTitle>
                <A.QuestionTypeText>질문을 클릭하면 해당하는 지원자의 면접 영상을 확인할 수 있습니다.</A.QuestionTypeText>
              </div>
            </A.QuestionTypeBox>

            <A.QuestionListBox>
              <A.QuestionDiv>자기소개</A.QuestionDiv>
              {companyQna.length > 0 ? (
                  companyQna.map((question) => (
                    <A.QuestionDiv key={question.id}>{question.question}</A.QuestionDiv>
                  ))
                ) : (
                  <div>Loading questions...</div>
              )}
            </A.QuestionListBox>
          </A.QuestionList>
        </A.InterviewVideo>
      </A.InterviewResultContainer>
    </A.MainContainer>
  );
}

export default AiResult;
