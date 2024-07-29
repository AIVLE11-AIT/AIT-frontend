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
  const [introVideoUrl, setIntroVideoUrl] = useState<string | null>(null); // 자기소개 영상 저장 변수
  const [companyQna, setCompanyQna] = useState<Question[]>([]);
  const [interviewerQna, setInterviewerQna] = useState<Question[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [interviewerImage, setInterviewerImage] = useState<string | null>(null); // Interviewer 이미지 상태 추가
  const [answer, setAnswer] = useState<string | undefined>("질문을 클릭하면 지원자의 영상이 출력됩니다."); //답변 text저장 변수

  // 클릭된 질문 색 변경 함수
  const [btnActive, setBtnActive] = useState("");
  const toggleActive = (btnName:string) => {
    setBtnActive((prev) => (prev === btnName ? "" : btnName));
  };

  // 질문 리스트별 선택 상태
  const [selectedCompanyQnaId, setSelectedCompanyQnaId] = useState<number | undefined>(undefined);
  const [selectedInterviewerQnaId, setSelectedInterviewerQnaId] = useState<number | undefined>(undefined);
  const [showIntroMessage, setShowIntroMessage] = useState<boolean>(false); // 자기소개 영상 유무
  
  const fetchVideoData = async () => {
    try {
      const token = sessionStorage.getItem('isLogin') || '';

      const [imageResponse, introduceResponse, interviewerInfoResponse, companyQnaResponse, interviewerQnaResponse] = await Promise.all([
        axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}/image/read`, { // 지원자 사진 요청
          headers: { Authorization: token },
          responseType: 'blob',
        }),
        axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}/introduce/read`, { // 자기소개 영상 요청
          headers: { Authorization: token },
          responseType: 'blob',
        }),
        axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}`, { // 지원자 정보 요청
          headers: { Authorization: token },
        }),
        axios.get(`/interviewGroup/${groupId}/companyQna/readAll`, {
          headers: { Authorization: token },
        }),
        axios.get(`/interviewGroup/${groupId}/${interviewerId}/interviewerQna/readAll`, {
          headers: { Authorization: token },
        }),
      ]);

      const imageURL = URL.createObjectURL(imageResponse.data);
      setInterviewerImage(imageURL);
      
      const videoBlob = new Blob([introduceResponse.data], { type: 'video/mp4' });
      const introVideoUrl = URL.createObjectURL(videoBlob);
      setIntroVideoUrl(introVideoUrl);
      
      setInterviewerInfo(interviewerInfoResponse.data);
      setCompanyQna(companyQnaResponse.data);
      setInterviewerQna(interviewerQnaResponse.data);

    } catch (error) {
      console.error('AxiosError:', error);
      //setError('Failed to fetch data');
      alert('지원자의 면접 응시가 완료되지 않았습니다.');
      onClickBackBtn();
    }
  };

  // 클릭한 질문에 맞는 답변 text와 영상 가져오기
  const fetchVideoUrl = async (questionId: number, type: 'companyQna' | 'interviewerQna') => {
    if (videoRef.current) {
      videoRef.current.pause();
      setAnswer("영상을 가져오는 중입니다! 잠시만 기다려주세요.");
    }
    try {
      const token = sessionStorage.getItem('isLogin') || '';
      const [videoResponse, answerResponse] = await Promise.all([
        axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}/file/${type}/${questionId}/read`, {
          headers: { Authorization: token },
          responseType: 'blob',
        }),
        axios.get(`/interviewGroup/${groupId}/interviewer/${interviewerId}/file/${type}/${questionId}/answer`, {
          headers: { Authorization: token },
        }),]);

      const videoBlob = new Blob([videoResponse.data], { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(videoBlob);
      setVideoUrl(videoUrl);
      //console.log(answerResponse);
      setAnswer(answerResponse.data.answer);

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
      const videoElement = videoRef.current;
      videoElement.src = videoUrl;
      videoElement.load();

      videoElement.onloadeddata = () => {
        videoElement.play().catch(err => {
          console.error('Error playing video:', err);
        });
      };
    }
  }, [videoUrl]);

  function onClickBackBtn() {
    navigate(`/interviewer-list/${groupId}`);
  }

  function handleCompanyQnaClick(questionId: number) {
    setSelectedCompanyQnaId(questionId);
    setSelectedInterviewerQnaId(undefined);
    setShowIntroMessage(false);
    fetchVideoUrl(questionId, 'companyQna');
  }

  function handleInterviewerQnaClick(questionId: number) {
    setSelectedInterviewerQnaId(questionId);
    setSelectedCompanyQnaId(undefined);
    setShowIntroMessage(false);
    fetchVideoUrl(questionId, 'interviewerQna');
  }

  return (
    <A.MainContainer>
      <A.Container>
        <A.InterviewerImage>
          {interviewerImage && (
            <A.Image src={interviewerImage} alt="Interviewer" />
          )}
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
          <div>지원자 정보를 가져오는 중입니다.</div>
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
                className={"btn" + ("자기소개" === btnActive ? " active" : "")}
                onClick={() => {
                  setSelectedCompanyQnaId(undefined);
                  setSelectedInterviewerQnaId(undefined);
                  setShowIntroMessage(true);
                  setVideoUrl(introVideoUrl || '');
                  toggleActive("자기소개");
                }}
              >
                자기소개
              </A.QuestionDiv>
              {companyQna.length > 0 ? (
                companyQna.map((question, index) => (
                  <A.QuestionDiv
                    key={question.id}
                    className={"btn" + (`기업질문${question.id}` === btnActive ? " active" : "")}
                    onClick={() => {handleCompanyQnaClick(question.id); toggleActive(`기업질문${question.id}`);}}
                  >
                    Q{index + 1}. &nbsp; {question.question}
                  </A.QuestionDiv>
                ))
              ) : (
                <A.QuestionDiv>질문을 가져오는 중입니다.</A.QuestionDiv>
              )}
              {interviewerQna.length > 0 ? (
                interviewerQna.map((question, index) => (
                  <A.QuestionDiv
                    key={question.id}
                    className={"btn" + (`개인질문${question.id}` === btnActive ? " active" : "")}
                    onClick={() => {handleInterviewerQnaClick(question.id); toggleActive(`개인질문${question.id}`);}}
                  >
                    Q{index + 4}. &nbsp;{question.question}
                  </A.QuestionDiv>
                ))
              ) : (
                <div></div>
              )}
            </A.QuestionListBox>
          </A.QuestionList>
        </A.InterviewVideo>

        {/* 답변 텍스트 변환 출력 */}
        <A.AnswerBox>
          {showIntroMessage ? "지원자의 자기소개입니다" : `${answer}`}
        </A.AnswerBox>

        <Report />
      </A.InterviewResultContainer>
    </A.MainContainer>
  );
}

export default AiResult;
