import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as I from './InterviewMail.style';
import InterviewMailHeader from '../../pages/interviewmail/InterviewMailHeader';

function InterviewMail() {
  const navigate = useNavigate();

  const handleSendMail = () => {
    navigate('/interview-mail-complete');
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
            <I.LineIconContainer>
              <I.Line />
              <I.Icon size={13}>
                <img src={process.env.PUBLIC_URL + '/images/GroupProfileIcon1.svg'} alt="Icon" />
              </I.Icon>
            </I.LineIconContainer>
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
              <li>- 테스트는 크롬, 엣지, 웨일 브라우저로 응시할 수 있습니다.</li>
              <br />
              <li>- 시험 전 [사전 테스트 체험]을 진행해주세요.</li>
              <br />
              <li>- 테스트 응시 시 [사전 테스트 체험] 페이지에서 테스트 환경과 이용 방법을 충분히 체험한 후 본 테스트에 응시하시기 바랍니다. [사전 테스트 체험]은 [면접 페이지 바로가기]에서 확인할 수 있습니다.</li>
              <br />
              <li>- 면접 기간 내에 면접 진행을 완료해 주세요.</li>
            </ul>
          </I.NoticeBox>
          <I.Centered>
            <I.GoToInterviewPageButton>
              면접 페이지 바로가기
            </I.GoToInterviewPageButton>
          </I.Centered>
          <I.CenteredText>
            <p>
              위의 내용을 반드시 숙지하시고 면접 응시에 착오 없으시길 바랍니다.
            <br />
            감사합니다.
            </p>
          </I.CenteredText>
          <I.FooterText>
            <p>
              이 메일은 pretest.co.kr에서 발송된 이메일로 지원 프로세스와 관련한 문의 사항은
              <br />
              해당 회사로 연락해주시기 바랍니다.</p>
            <p>2024 AIT · 서비스 이용약관 · 개인정보 처리방침</p>
          </I.FooterText>
        </I.ContentContainer>
      </I.MainContent>
    </I.Container>
  );
}

export default InterviewMail;
