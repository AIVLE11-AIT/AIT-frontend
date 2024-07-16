import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as A from './AiResult.style';
import Report from '../../components/aiResult/Report';

interface InterviewerInfo {
  name: string;
  email: string;
  isPass: boolean;
}

interface Question {
  id: number;
  question: string;
  videoUrl: string | null;
  answer: string;
}

function AiResult() {
  let { groupId, interviewerId } = useParams();
  const [interviewerInfo, setInterviewerInfo] = useState<InterviewerInfo | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined);
  const [introVideoUrl, setIntroVideoUrl] = useState<string | null>(null);
  const [companyQna, setCompanyQna] = useState<Question[]>([]);
  const [interviewerQna, setInterviewerQna] = useState<Question[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  // 질문 리스트별 선택 상태
  const [selectedCompanyQnaId, setSelectedCompanyQnaId] = useState<number | undefined>(undefined);
  const [selectedInterviewerQnaId, setSelectedInterviewerQnaId] = useState<number | undefined>(undefined);
  const [showIntroMessage, setShowIntroMessage] = useState<boolean>(false);

  const fetchVideoData = async () => {
    try {
      const token = sessionStorage.getItem('isLogin') || '';

      const [introduceResponse, interviewerInfoResponse, companyQnaResponse, interviewerQnaResponse] = await Promise.all([
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
        axios.get(`/interviewGroup/${groupId}/${interviewerId}/interviewerQna/readAll`, {
          headers: { Authorization: token },
        }),
      ]);

      const videoBlob = new Blob([introduceResponse.data], { type: 'video/mp4' });
      const introVideoUrl = URL.createObjectURL(videoBlob);
      setIntroVideoUrl(introVideoUrl); // 자기소개 영상 저장
      console.log(interviewerInfoResponse.data);
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
      //console.log(`Video URL for ${type} ${questionId}:`, videoUrl);

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
      videoRef.current.src = videoUrl || '';
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [videoUrl]);

  // 목록 이동 버튼 클릭 시
  function onClickBackBtn() {
    navigate(`/interviewer-list/${groupId}`);
  }

  function handleCompanyQnaClick(questionId: number) {
    setSelectedCompanyQnaId(questionId);
    setSelectedInterviewerQnaId(undefined); // Reset interviewer QnA selection
    setShowIntroMessage(false); // Hide intro message
    fetchVideoUrl(questionId, 'companyQna');
  }

  function handleInterviewerQnaClick(questionId: number) {
    setSelectedInterviewerQnaId(questionId);
    setSelectedCompanyQnaId(undefined); // Reset company QnA selection
    setShowIntroMessage(false); // Hide intro message
    fetchVideoUrl(questionId, 'interviewerQna');
  }

  const getSelectedAnswer = () => {
    if (showIntroMessage) {
      return "지원자의 자기소개입니다";
    } else if (selectedCompanyQnaId !== undefined) {
      const selectedQuestion = companyQna.find(question => question.id === selectedCompanyQnaId);
      return selectedQuestion ? selectedQuestion.answer : '';
    } else if (selectedInterviewerQnaId !== undefined) {
      const selectedQuestion = interviewerQna.find(question => question.id === selectedInterviewerQnaId);
      return selectedQuestion ? selectedQuestion.answer : '';
    }
    return '';
  };

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
            <A.PassBox>
              <A.PassIcon isPass={interviewerInfo.isPass}/>
              <A.PassText isPass={interviewerInfo.isPass}>{interviewerInfo.isPass ? '합격' : '불합격'}</A.PassText>
            </A.PassBox>
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
              <video ref={videoRef} controls style={{ height: '300px', width: '540px' }}>
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
              <A.QuestionDiv
                onClick={() => {
                  setSelectedCompanyQnaId(undefined);
                  setSelectedInterviewerQnaId(undefined);
                  setShowIntroMessage(true);
                  setVideoUrl(introVideoUrl || '');
                }}
              >
                자기소개
              </A.QuestionDiv>
              {companyQna.length > 0 ? (
                companyQna.map((question, index) => (
                  <A.QuestionDiv
                    key={question.id}
                    onClick={() => handleCompanyQnaClick(question.id)}
                  >
                    Q{index + 1}. &nbsp; {question.question}
                  </A.QuestionDiv>
                ))
              ) : (
                <div>Loading questions...</div>
              )}
              {interviewerQna.length > 0 ? (
                interviewerQna.map((question, index) => (
                  <A.QuestionDiv
                    key={question.id}
                    onClick={() => handleInterviewerQnaClick(question.id)}
                  >
                    Q{index + 4}. &nbsp;{question.question}
                  </A.QuestionDiv>
                ))
              ) : (
                <div>Loading questions...</div>
              )}
            </A.QuestionListBox>
          </A.QuestionList>
        </A.InterviewVideo>

        {/* 답변 텍스트 변환 출력 */}
        <A.AnswerBox>
          {getSelectedAnswer()}
        </A.AnswerBox>

        <Report />
      </A.InterviewResultContainer>
    </A.MainContainer>
  );
}

export default AiResult;
