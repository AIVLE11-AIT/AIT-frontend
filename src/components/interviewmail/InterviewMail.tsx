import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as I from './InterviewMail.style';
import InterviewMailHeader from '../../pages/interviewmail/InterviewMailHeader';
import axios from 'axios';

function InterviewMail() {
  const navigate = useNavigate();
  // useParams 훅을 사용하여 URL 경로 매개변수(index)를 가져옴
  let { index } = useParams();

  // 전송하기 버튼 클릭 시
  const handleSendMail = () => {
      axios({
        url: `/interviewGroup/${index}/interviewer/sendEmail`,
        method: 'get',
        headers:{
          Authorization: sessionStorage.getItem('isLogin'),
        }
      })
      
      .then((response) => {
        console.log(response.data);
        navigate('/interview-mail-complete');
      }) .catch((error) => {
        console.log('실패');
        console.error('AxiosError:', error);
      });
  };


  return (
    <I.Container>
      <I.Sidebar>
        <InterviewMailHeader />
      </I.Sidebar>
      <I.MainContent>
        <I.HeaderContainer>
          <div>
            <I.Title>메일 전송하기</I.Title>
            <I.Subtitle>면접자들에게 아래와 같이 면접 링크 메일을 전송합니다.</I.Subtitle>
          </div>
          <I.SendMailButton onClick={handleSendMail}>전송하기</I.SendMailButton>
        </I.HeaderContainer>

        <I.ContentContainer>
          <I.Section>
            <I.SectionTitle>KT 24년 하반기 공채 1차 AI면접</I.SectionTitle>
            <p>이미지님 안녕하세요.</p>
            <p>AI 면접은 2024년 1월 1일 - 2024년 1월 3일 기간 내에 진행 가능합니다.</p>
            <p>AI 면접은 pretest.co.kr 에서 온라인으로 진행됩니다.</p>
          </I.Section>
          <I.NoticeBox>
            <I.NoticeBoxTitle>[주의사항]</I.NoticeBoxTitle>
            <ul>
              <li>- 테스트 응시 시 전 이용 방법을 충분히 읽어본 후 면접에 응시하시기 바랍니다.</li>
              <li>- 면접 기간 내에 면접 진행을 완료해 주세요.</li>
            </ul>
          </I.NoticeBox>
          <I.Centered>
            <I.GoToInterviewPageButton>
              면접 페이지 바로가기
            </I.GoToInterviewPageButton>
          </I.Centered>
          <I.CenteredText>
              위의 내용을 반드시 숙지하시고 면접 응시에 착오 없으시길 바랍니다.<br />
              감사합니다.
          </I.CenteredText>
          <I.FooterText>
            <p>2024 AIT · 서비스 이용약관 · 개인정보 처리방침</p>
          </I.FooterText>
        </I.ContentContainer>
      </I.MainContent>
    </I.Container>
  );
}

export default InterviewMail;
