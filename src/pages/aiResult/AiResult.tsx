import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as A from './AiResult.style';

interface InterviewerInfo {
  name: string;
  email: string;
}

interface File {
  id: number;
  video_path: string;
}

interface Question {
  id: number;
  question: string;
  videoUrl: string | null; // 질문에 해당하는 영상 URL을 저장할 필드 추가
}

function AiResult() {
  let { groupId, interviewerId } = useParams();
  const [interviewerInfo, setInterviewerInfo] = useState<InterviewerInfo | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined); // 영상 URL 저장 변수
  const [introVideoUrl, setIntroVideoUrl] = useState<string | null>(null); // 자기소개 영상 URL 저장 변수
  const [companyQna, setCompanyQna] = useState<Question[]>([]); // 공통 질문과 영상 URL 저장 변수
  const [interviewerQna, setInterviewerQna] = useState<Question[]>([]); // 공통 질문과 영상 URL 저장 변수
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null); // 비디오 참조 변수

  const fetchVideoData = async () => {
    try {
      const token = sessionStorage.getItem('isLogin') || '';

      const [introduceResponse, interviewerInfoResponse, companyQnaResponse, interviewerQnaResponse] = await Promise.all([
        // 자기소개 영상
        axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}/introduce/read`, {
          headers: { Authorization: token },
          responseType: 'blob',
        }),
        // 지원자 정보
        axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}`, {
          headers: { Authorization: token },
        }),
        // 공통 질문
        axios.get(`/interviewGroup/${groupId}/companyQna/readAll`, {
          headers: { Authorization: token },
        }),
        // 자소서 질문
        axios.get(`/interviewGroup/${groupId}/${interviewerId}/interviewerQna/readAll`, {
          headers: { Authorization: token },
        }),
      ]);

      // 자기소개 영상 URL 저장
      const videoBlob = new Blob([introduceResponse.data], { type: 'video/mp4' });
      const introVideoUrl = URL.createObjectURL(videoBlob);
      setIntroVideoUrl(introVideoUrl);

      setInterviewerInfo(interviewerInfoResponse.data); // 지원자 정보 저장
      setCompanyQna(companyQnaResponse.data); // 공통 질문 저장
      setInterviewerQna(interviewerQnaResponse.data); // 자소서 기반 질문 저장

    } catch (error) {
      console.error('AxiosError:', error);
      setError('Failed to fetch data');
    }
  };

  const fetchVideoUrl = async (questionId: number, type: 'companyQna' | 'interviewerQna') => {
    try {
      const token = sessionStorage.getItem('isLogin') || '';
      const videoResponse = await axios.get(
        `/interviewGroup/${groupId}/interviewer/${interviewerId}/file/${type}/${questionId}/read`,
        {
          headers: { Authorization: token },
          responseType: 'blob',
        }
      );

      const videoBlob = new Blob([videoResponse.data], { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoUrl);
      console.log(`Video URL for ${type} ${questionId}:`, videoUrl);

    } catch (error) {
      console.error('AxiosError:', error);
      setError('Failed to fetch video');
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

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.src = videoUrl || ''; // 비디오 URL 변경 시 비디오 태그 업데이트
      videoRef.current.load();
      videoRef.current.play(); // 비디오 자동 재생
    }
  }, [videoUrl]);

  // 목록 이동 클릭한 경우
  function onClickBackBtn() {
    navigate(`/interviewer-list/${groupId}`);
  }

  // 질문을 클릭한 경우
  function handleQuestionClick(questionId: number, type: 'companyQna' | 'interviewerQna') {
    fetchVideoUrl(questionId, type);
  }

  return (
    <A.MainContainer>
      <A.Container>
        <A.InterviewerImage>
          <img src={process.env.PUBLIC_URL + '/images/Image.svg'} alt="Interviewer" />
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
            ) : (
              <video ref={videoRef} controls style={{ width: '500px', height: '300px' }}>
                <source src={videoUrl || ''} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
              <A.QuestionDiv onClick={() => setVideoUrl(introVideoUrl || '')}>자기소개</A.QuestionDiv>
              {companyQna.length > 0 ? (
                companyQna.map((question) => (
                  <A.QuestionDiv key={question.id} onClick={() => handleQuestionClick(question.id, 'companyQna')}>
                    {question.question}
                  </A.QuestionDiv>
                ))
              ) : (
                <div>Loading questions...</div>
              )}
              {interviewerQna.length > 0 ? (
                interviewerQna.map((question) => (
                  <A.QuestionDiv key={question.id} onClick={() => handleQuestionClick(question.id, 'interviewerQna')}>
                    {question.question}
                  </A.QuestionDiv>
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
